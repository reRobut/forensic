// 随机案件生成器
// 设计原则：先生成精确的整数 PMmin，再选择可行的物种/虫龄并反推现场温度。
(function () {
  "use strict";

  const MODEL_LIBRARY = {
    "lucilia-sericata": { d0: 9.19, kTotal: 6023.2 },
    "chrysomya-megacephala": { d0: 11.41, kTotal: 3418.7 },
    "chrysomya-rufifacies": { d0: 11.96, kTotal: 3759.95 },
    "chrysomya-nigripes": { d0: 12.52, kTotal: 4083.0 },
    "chrysomya-albiceps": { d0: 10.2, kTotal: 3900 },
    "calliphora-vicina": { d0: 2.0, kTotal: 10500 },
    "calliphora-vomitoria": { d0: 3.0, kTotal: 11500 },
    "phormia-regina": { d0: 9.5, kTotal: 5449 },
    "sarcophaga-spp": { d0: 10.87, kTotal: 5809.7 },
    "musca-domestica": { d0: 11.43, kTotal: 3350.2 },
  };

  // 图片资产使用的物种缩写；幼虫文件示例：assets/larva/cn_larva3.png
  const ASSET_PREFIX = {
    "lucilia-sericata": "ls",
    "chrysomya-megacephala": "cm",
    "chrysomya-rufifacies": "cr",
    "chrysomya-nigripes": "cn",
    "chrysomya-albiceps": "ca",
    "calliphora-vicina": "cv",
    "calliphora-vomitoria": "cvo",
    "phormia-regina": "pr",
    "sarcophaga-spp": "bp",
    "musca-domestica": "md",
  };

  // 虫态起点占卵（或幼虫产出）至成虫总有效积温的比例。
  // 卵期起点的 f=0，无法形成有意义的正数 PMImin，因此随机案件从一龄开始。
  const STAGE_START_FRACTION = {
    egg: 0,
    l1: 0.04,
    l2: 0.1,
    l3: 0.2,
    pupa: 0.45,
    adult: 1,
  };
  const CASE_STAGES = ["l1", "l2", "l3", "pupa"];
  const STAGE_SEQUENCE = ["egg", "l1", "l2", "l3", "pupa", "adult"];
  const PMMIN_MIN = 20;
  const PMMIN_MAX = 180;
  const SCENE_PROFILES = ["outdoorExposed", "indoorAccessible"];
  const COLD_SPECIES = new Set(["calliphora-vicina", "calliphora-vomitoria"]);
  const WARM_SPECIES = new Set([
    "chrysomya-megacephala",
    "chrysomya-nigripes",
    "sarcophaga-spp",
  ]);
  const ECOLOGY_WARNING_CASE_SPECIES = new Set([
    "chrysomya-rufifacies",
    "chrysomya-albiceps",
  ]);

  function allSpecies() {
    const result = [];
    (window.INSECT_ATLAS || INSECT_ATLAS).forEach((order) => {
      order.families.forEach((family) => {
        family.genera.forEach((genus) => {
          (genus.species || []).forEach((species) => result.push(species));
        });
      });
    });
    return result;
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function attachModels(speciesList) {
    speciesList.forEach((species) => {
      const ecology = species.forensicEcology;
      if (ecology && !species.body.includes("到达／定殖资料")) {
        const outdoor = ecology.arrival.outdoorExposed;
        const indoor = ecology.arrival.indoorAccessible;
        const formatRange = (profile) => profile
          ? `${profile.typicalRangeHours[0]}–${profile.typicalRangeHours[1]} h（最早约 ${profile.earliestHours} h）`
          : "通常不适用";
        species.body += `<hr class="ediv"><b>到达／定殖资料（游戏生态范围）：</b><br>
角色：${ecology.colonizationRole}<br>
记录事件：${ecology.arrival.event}<br>
室外暴露：${formatRange(outdoor)}<br>
室内可进入：${formatRange(indoor)}<br>
<span style="color:#8a6030">该范围用于生态筛选，不作为跨地区通用常数。</span>`;
      }

      const base = MODEL_LIBRARY[species.id];
      if (!base) return;
      species.pmiModel = {
        d0: base.d0,
        kTotal: base.kTotal,
        stageStartFraction: { ...STAGE_START_FRACTION },
      };
      const stages = ["egg", "l1", "l2", "l3", "pupa", "adult"];
      const labels = ["卵/幼虫产出", "一龄幼虫", "二龄幼虫", "三龄幼虫", "蛹", "成虫"];
      const fmt = (n) => Number(n.toFixed(2));
      const rows = stages.map((stage, i) => {
        const accumulated = base.kTotal * STAGE_START_FRACTION[stage];
        const interval = i < stages.length - 1
          ? base.kTotal * (STAGE_START_FRACTION[stages[i + 1]] - STAGE_START_FRACTION[stage])
          : null;
        return `${labels[i]}：起点累计 ${fmt(accumulated)} °C·h${interval === null ? "" : `；本阶段所需积温 K = ${fmt(interval)} °C·h`}`;
      });
      species.body += `<hr class="ediv"><b>各虫态有效积温（游戏模型，°C·h）：</b><br>
${rows.join("<br>")}`;

    });
  }

  function temperatureRange(speciesId, sceneProfile) {
    if (COLD_SPECIES.has(speciesId)) {
      return sceneProfile === "outdoorExposed" ? [6, 16] : [10, 20];
    }
    if (WARM_SPECIES.has(speciesId)) {
      return sceneProfile === "outdoorExposed" ? [20, 32] : [18, 29];
    }
    return sceneProfile === "outdoorExposed" ? [12, 28] : [16, 27];
  }

  function viableCombinations(speciesList, targetPmi, sceneProfile) {
    const combinations = [];
    speciesList.forEach((species) => {
      const ecology = species.forensicEcology;
      if (
        !species.pmiModel ||
        !species.images ||
        !ASSET_PREFIX[species.id] ||
        !ecology ||
        !(
          ecology.pmiPolicy === "development" ||
          (ecology.pmiPolicy === "developmentWithEcologyWarning" &&
            ECOLOGY_WARNING_CASE_SPECIES.has(species.id))
        )
      ) return;
      const arrivalProfile = ecology.arrival[sceneProfile];
      if (!arrivalProfile) return;
      const [tempMin, tempMax] = temperatureRange(species.id, sceneProfile);
      CASE_STAGES.forEach((stage) => {
        const stageIndex = STAGE_SEQUENCE.indexOf(stage);
        const nextStage = STAGE_SEQUENCE[stageIndex + 1];
        const stageStart = species.pmiModel.stageStartFraction[stage];
        const stageEnd = species.pmiModel.stageStartFraction[nextStage];
        // 同一虫龄内也随机取样：15%–85%，使培养至下一虫态的时间能区分早期/末期。
        const stageProgress = randomInt(15, 85) / 100;
        const fraction = stageStart + (stageEnd - stageStart) * stageProgress;
        const avgTemp =
          species.pmiModel.d0 +
          (species.pmiModel.kTotal * fraction) / targetPmi;
        if (avgTemp >= tempMin && avgTemp <= tempMax && avgTemp > species.pmiModel.d0) {
          combinations.push({ species, stage, avgTemp, stageProgress });
        }
      });
    });
    return combinations;
  }

  function corpseState(pmiHours) {
    if (pmiHours < 36) return "新鲜期 · 尸体现早期变化";
    if (pmiHours < 72) return "早期腐败 · 腐败气味轻微";
    if (pmiHours < 120) return "膨胀期 · 腐败气味明显";
    return "活跃腐败期 · 软组织明显分解";
  }

  function makeCaseId(now) {
    const date = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
    ].join("");
    return `${date}-${String(randomInt(1, 999)).padStart(3, "0")}`;
  }

  function generateCase() {
    const speciesList = allSpecies();
    attachModels(speciesList);
    const sceneProfile = randomItem(SCENE_PROFILES);

    // 第一步只抽隐藏标准答案；如该答案没有合理的物种/温度组合则重新抽取。
    let targetPmi;
    let combinations = [];
    for (let attempt = 0; attempt < 500 && combinations.length === 0; attempt += 1) {
      targetPmi = randomInt(PMMIN_MIN, PMMIN_MAX);
      combinations = viableCombinations(speciesList, targetPmi, sceneProfile);
    }
    if (!combinations.length) throw new Error("无法生成满足温度范围的随机案件");

    const selected = randomItem(combinations);
    // 档案和玩家输入均使用整数温度。
    const avgTemp = Math.round(selected.avgTemp);
    const spread = randomItem([2, 3, 4, 5]);
    const tempMin = avgTemp - spread;
    const tempMax = avgTemp + spread;

    // 温度取整后，以玩家可见温度重算唯一标准答案。
    const stageIndex = STAGE_SEQUENCE.indexOf(selected.stage);
    const nextStage = STAGE_SEQUENCE[stageIndex + 1];
    const model = selected.species.pmiModel;
    const stageStartFraction = model.stageStartFraction[selected.stage];
    const nextStageFraction = model.stageStartFraction[nextStage];
    const sampledFraction =
      stageStartFraction +
      (nextStageFraction - stageStartFraction) * selected.stageProgress;
    const nextStageADH = model.kTotal * nextStageFraction;
    const rawRemainingADH = nextStageADH - model.kTotal * sampledFraction;
    // 玩家只能看到一位小数的培养时间，因此标准答案也以这个可见值重算。
    const rearingToNextStageHours = Number(
      (rawRemainingADH / avgTempMinusD0(25, model.d0)).toFixed(1),
    );
    const remainingADH =
      rearingToNextStageHours * avgTempMinusD0(25, model.d0);
    const sampleAccumulatedADH = nextStageADH - remainingADH;
    const exactPmi =
      sampleAccumulatedADH / avgTempMinusD0(avgTemp, model.d0);
    const arrivalEstimate =
      selected.species.forensicEcology.arrival[sceneProfile];
    const answerPmiMinHours = exactPmi + arrivalEstimate.earliestHours;
    const answerPmiMaxHours =
      exactPmi + arrivalEstimate.typicalRangeHours[1];
    const now = new Date();
    return {
      id: makeCaseId(now),
      discoveredAt: now,
      corpseState: corpseState((answerPmiMinHours + answerPmiMaxHours) / 2),
      tempMin,
      tempMax,
      avgTemp,
      answerPmiHours: answerPmiMinHours,
      answerPmiMinHours,
      answerPmiMaxHours,
      developmentPmiMinHours: exactPmi,
      developmentPmiMaxHours: exactPmi,
      stageProgress: selected.stageProgress,
      sampleAccumulatedADH,
      rearingToNextStageHours,
      speciesId: selected.species.id,
      collectedStage: selected.stage,
      assetPrefix: ASSET_PREFIX[selected.species.id],
      adultImage:
        randomItem([selected.species.images.adultMale, selected.species.images.adultFemale].filter(Boolean).length
          ? [selected.species.images.adultMale, selected.species.images.adultFemale].filter(Boolean)
          : [selected.species.images.adult].filter(Boolean)),
      sceneProfile,
      sceneLabel: sceneProfile === "outdoorExposed" ? "室外暴露" : "室内可进入",
      colonizationRole: selected.species.forensicEcology.colonizationRole,
      arrivalEvent: selected.species.forensicEcology.arrival.event,
      arrivalEstimate,
      pmiPolicy: selected.species.forensicEcology.pmiPolicy,
    };
  }

  function avgTempMinusD0(avgTemp, d0) {
    return avgTemp - d0;
  }

  window.FORENSIC_CASE = generateCase();
})();
