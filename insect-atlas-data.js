// 法医昆虫图鉴数据
// 结构：目 > 科 > 属（分类容器） > 种（图鉴卡片：图片与说明文字）
// 由「法医昆虫图鉴 · 编辑器」导出

const INSECT_ATLAS = [
  {
    id: "diptera",
    order: "双翅目",
    latin: "Diptera",
    families: [
      {
        id: "calliphoridae",
        family: "丽蝇科",
        latin: "Calliphoridae",
        genera: [
          {
            id: "lucilia",
            genus: "绿蝇属",
            latin: "Lucilia",
            species: [
              {
                id: "lucilia-sericata",
                name: "丝光绿蝇",
                latin: "Lucilia sericata",
                isFly: true,
                images: {
                  larva: "assets/larva/collection.png",
                  adultMale: "assets/ls.png",
                  adultFemale: "assets/lsfemale.png",
                },
                body: `<b>体型：</b>体长 8–10&nbsp;mm，体色金属绿色带铜光泽<br>
<hr class="ediv">
<b>法医意义：</b><br>
最常见的先驱蝇种之一，死后极短时间（约1–4&nbsp;h）内即可循自然孔口（眼、口、鼻、伤口）产卵。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 9.19&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 6023.2&nbsp;°C·h`,
              }
            ],
          },
          {
            id: "chrysomya",
            genus: "金蝇属",
            latin: "Chrysomya",
            species: [
              {
                id: "chrysomya-megacephala",
                name: "大头金蝇",
                latin: "Chrysomya megacephala",
                isFly: true,
                images: {
                  larva: "assets/larva/collection_cm.png",
                  adultMale: "assets/cm.png",
                  adultFemale: "assets/cmfemale.png",
                },
                body: `<b>体型：</b>体长 8–11&nbsp;mm<br>
<b>识别要点：</b>复眼深红，胸腹部金绿色具强金属光泽<hr class="ediv">
<b>法医意义：</b><br>
华南及热带地区重要的早期定殖蝇种，可在新鲜期至膨胀期尸体上产卵；与其他丽蝇的先后顺序会随地区、季节和尸体可接近性改变，不能固定表述为总是先于绿蝇。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 11.41&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 3418.7&nbsp;°C·h`,
              },
              {
                id: "chrysomya-rufifacies",
                name: "绯颜裸金蝇",
                latin: "Chrysomya rufifacies",
                isFly: true,
                images: {
                  larva: "assets/larva/collection_cr.png",
                  adultMale: "assets/cr.png",
                  adultFemale: "assets/crfemale.png",
                },
                body: `<b>体型：</b>体长 9–12&nbsp;mm，幼虫体表具肉刺状突起（"刺蛆"）<br>
<b>识别要点：</b>三龄幼虫体表布满肉质刺突，极易与其他丽蝇幼虫区分<hr class="ediv">
<b>法医意义：</b><br>
可在腐败早期定殖；幼虫早期可取食腐肉，高龄幼虫具有兼性捕食性并会取食其他蝇蛆。因此不能仅凭本种出现就断定此前必有另一种先驱蝇活动。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 11.96&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 3759.95&nbsp;°C·h`,
              },
              {
                id: "chrysomya-nigripes",
                name: "乌足锡蝇",
                latin: "Chrysomya nigripes",
                isFly: true,
                images: {
                  larva: "assets/larva/collect_cn.png",
                  adultMale: "assets/cn.png",
                  adultFemale: "assets/cn.png",
                },
                body: `<b>体型：</b>体长 7–10&nbsp;mm，体色暗绿<br>
<b>识别要点：</b>足全黑（种名 nigripes 即"黑足"），胸背金属光泽偏暗<hr class="ediv">
<b>法医意义：</b><br>
东南亚及华南暖热地区可见的中后期定殖种。现有研究将其描述为尸体膨胀期之后定殖，并可持续存在至高度腐败或骨骼化阶段；不应归为死后数小时即产卵的先驱种。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 12.52&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 4083.0&nbsp;°C·h`,
              },
              {
                id: "chrysomya-albiceps",
                name: "白头金蝇",
                latin: "Chrysomya albiceps",
                isFly: true,
                images: {
                  larva: "assets/larva/collection_cr.png",
                  adultMale: "assets/ca.png",
                  adultFemale: "assets/cafemale.png",
                },
                body: `<b>体型：</b>体长 8–11&nbsp;mm，头部黄白色，幼虫具肉刺突起<br>
<b>识别要点：</b>外形与绯颜裸金蝇相近，均为"刺蛆"型幼虫，需借助后气门形态区分<hr class="ediv">
<b>法医意义：</b><br>
可在暖热地区尸体腐败早期定殖；幼虫早期可取食腐肉，高龄幼虫具有兼性捕食性并常捕食同处的其他蝇蛆，多见于地中海、非洲及南欧地区案例。<hr class="ediv">
<b>发育参数（跨地理种群估计）：</b><br>
发育起点温度 D<sub>0</sub> ≈ 10.2&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 3900&nbsp;°C·h`,
              }
            ],
          },
          {
            id: "calliphora",
            genus: "丽蝇属",
            latin: "Calliphora",
            species: [
              {
                id: "calliphora-vicina",
                name: "红头丽蝇",
                latin: "Calliphora vicina",
                isFly: true,
                images: {
                  larva: "assets/larva/collection.png",
                  adultMale: "assets/cv.png",
                  adultFemale: "assets/cvfemale.png",
                },
                body: `<b>体型：</b>体长 10–13&nbsp;mm，腹部深蓝黑色<br>
<hr class="ediv">
<b>法医意义：</b><br>
嗜低温种类，在早春、秋冬及室内阴凉环境中常先于喜温蝇种到达尸体，是低温季节案件的重要指示物种。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 2.0&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 10500&nbsp;°C·h`,
              },
              {
                id: "calliphora-vomitoria",
                name: "反吐丽蝇",
                latin: "Calliphora vomitoria",
                isFly: true,
                images: {
                  larva: "assets/larva/collection.png",
                  adultMale: "assets/cvo.png",
                  adultFemale: "assets/cvofemale.png",
                },
                body: `<b>体型：</b>体长 11–14&nbsp;mm<br>
<b>法医意义：</b><br>
同属嗜低温种，常见于森林、山地及寒冷季节案发现场。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 3.0&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 11500&nbsp;°C·h`,
              }
            ],
          },
          {
            id: "phormia",
            genus: "污蝇属",
            latin: "Phormia",
            species: [
              {
                id: "phormia-regina",
                name: "黑须污蝇",
                latin: "Phormia regina",
                isFly: true,
                images: {
                  larva: "assets/larva/collection.png",
                  adultMale: "assets/pr.png",
                  adultFemale: "assets/prfemale.png",
                },
                body: `<b>体型：</b>体长 8–10&nbsp;mm，体色深蓝绿色，光泽暗于丽蝇属<br>
<hr class="ediv">
<b>法医意义：</b><br>
北美及温带地区极重要的先驱蝇种，产卵与到达速度极快，常与丝光绿蝇同期出现并存在种间竞争。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 9.5&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 5449&nbsp;°C·h`,
              }
            ],
          }
        ],
      },
      {
        id: "sarcophagidae",
        family: "麻蝇科",
        latin: "Sarcophagidae",
        genera: [
          {
            id: "sarcophaga",
            genus: "别麻蝇属",
            latin: "Boettcherisca",
            species: [
              {
                id: "sarcophaga-spp",
                name: "棕尾别麻蝇",
                latin: "Boettcherisca peregrina",
                isFly: true,
                images: {
                  larva: "assets/larva/collection.png",
                  adultMale: "assets/bp.png",
                  adultFemale: "assets/bp.png",
                },
                body: `<b>体型：</b>体长 10–15&nbsp;mm，灰黑色，胸背具三条纵行暗纹，腹部呈棋盘状斑纹<br>
<b>识别要点：</b>卵胎生（直接产出活体一龄幼虫）<hr class="ediv">
<b>法医意义：</b><br>
麻蝇科为卵胎生繁殖方式，跳过卵期直接产幼虫，到达时间与丽蝇科接近或略晚，可用于交叉验证 PMI。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 10.87&nbsp;°C<br>
幼虫产出—成虫总有效积温 K<sub>总</sub>≈ 5809.7&nbsp;°C·h<br>
<span style="color:#8a6030">注：本种为卵胎生，无独立"卵期"，积温起算点为幼虫产出（相当于其他种的孵化时刻）。</span>`,
              }
            ],
          }
        ],
      },
      {
        id: "muscidae",
        family: "家蝇科",
        latin: "Muscidae",
        genera: [
          {
            id: "musca",
            genus: "家蝇属",
            latin: "Musca",
            species: [
              {
                id: "musca-domestica",
                name: "家蝇",
                latin: "Musca domestica",
                isFly: true,
                images: {
                  larva: "assets/larva/collection.png",
                  adultMale: "assets/md.png",
                  adultFemale: "assets/md.png",
                },
                body: `<b>体型：</b>体长 6–8&nbsp;mm，胸背具四条纵行黑纹<br>
<b>识别要点：</b>体型明显小于丽蝇科，飞行迅速，是最常见的室内蝇种<hr class="ediv">
<b>法医意义：</b><br>
广泛分布于人居环境，室内、垃圾堆附近案件中常见。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 11.43&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 3350.2&nbsp;°C·h`,
              }
            ],
          },
          {
            id: "hydrotaea",
            genus: "齿股蝇属",
            latin: "Hydrotaea",
            species: [
              {
                id: "hydrotaea-spinigera",
                name: "厚环黑蝇",
                latin: "Hydrotaea spinigera",
                isFly: true,
                images: {
                  larva: "assets/larva/collection_hs.png",
                  adultMale: "assets/hs.png",
                  adultFemale: "assets/hsfemale.png",
                },
                body: `<b>体型：</b>体长 5–7&nbsp;mm，体色暗灰黑，胸背具不明显纵纹<br>
<b>识别要点：</b>幼虫体壁增厚（"厚环"），常见于腐败中后期尸体表面<hr class="ediv">
<b>法医意义：</b><br>
多在腐败中后期出现，幼虫兼具捕食性，会取食其他蝇类幼虫；由于系统发育数据尚不充分，本图鉴暂不提供可靠的积温模型，仅作为演替阶段的辅助参考物种。<hr class="ediv">
<span style="color:#8a6030">注：该种缺乏公开发表、可靠的 D<sub>0</sub>/K 积温常数，鉴定记录表中不纳入 PMI<sub>min</sub> 计算，仅用于判断尸体大致所处腐败阶段。</span>`,
              }
            ],
          }
        ],
      },
      {
        id: "stratiomyidae",
        family: "水虻科",
        latin: "Stratiomyidae",
        genera: [
          {
            id: "hermetia",
            genus: "水虻属",
            latin: "Hermetia",
            species: [
              {
                id: "hermetia-illucens",
                name: "黑水虻",
                latin: "Hermetia illucens",
                isFly: false,
                images: {
                  larva: "assets/larva/hi_larva.png",
                  adult: "assets/hi.png",
                },
                body: `<b>体型：</b>幼虫体长可达 20&nbsp;mm，体色灰白至深褐；成虫体长 15–20&nbsp;mm，形似胡蜂但无螫针<br>
<b>识别要点：</b>幼虫体节明显、体表革质坚硬<hr class="ediv">
<b>法医意义：</b><br>
黑水虻并非典型的法医指示蝇种，多见于高度腐败、湿润或已有大量有机质堆积的环境（近似堆肥生境），出现通常提示尸体已经历较长腐败期，但因缺乏权威积温模型，不适用于精确 PMI<sub>min</sub> 计算。<hr class="ediv">
<span style="color:#8a6030">注：本种在鉴定记录表中仅作为演替阶段参考，不参与积温法 PMI 计算。</span>`,
              }
            ],
          }
        ],
      }
    ],
  },
  {
    id: "coleoptera",
    order: "鞘翅目",
    latin: "Coleoptera",
    families: [
      {
        id: "dermestidae",
        family: "皮蠹科",
        latin: "Dermestidae",
        genera: [
          {
            id: "dermestes",
            genus: "皮蠹属",
            latin: "Dermestes",
            species: [
              {
                id: "dermestes-maculatus",
                name: "白腹皮蠹",
                latin: "Dermestes maculatus",
                isFly: false,
                images: {
                  adult: "assets/dm.png",
                },
                body: `<b>体型：</b>体长 6–10&nbsp;mm，椭圆形，深褐至黑色，腹面被白色鳞毛<br>
<b>识别要点：</b>鞘翅具稀疏鳞毛斑纹，幼虫多毛、活动敏捷，蛀食干燥皮革及残余软组织<hr class="ediv">
<b>法医意义：</b><br>
典型的干燥腐败期／骨骼化期演替种，专食皮革、软骨、韧带及干燥残余组织，其出现提示死亡时间已达数周甚至更久，是判断腐败阶段的重要指标之一。<hr class="ediv">
<span style="color:#8a6030">注：本科甲虫世代周期长、受食物基质与湿度影响极大，现场公开数据的积温常数波动很大，本图鉴不提供其作为 PMI<sub>min</sub> 计算依据，仅用于演替阶段判断。</span>`,
              }
            ],
          }
        ],
      },
      {
        id: "cleridae",
        family: "郭公虫科",
        latin: "Cleridae",
        genera: [
          {
            id: "necrobia",
            genus: "赤足郭公甲属",
            latin: "Necrobia",
            species: [
              {
                id: "necrobia-rufipes",
                name: "赤足郭公甲",
                latin: "Necrobia rufipes",
                isFly: false,
                images: {
                  adult: "assets/redfeet.png",
                },
                body: `<b>体型：</b>体长 3–7&nbsp;mm，体色金属蓝绿色，足呈红褐色<br>
<hr class="ediv">
<b>法医意义：</b><br>
喜食干燥、油脂含量高的残余组织（如皮下脂肪干化后的产物），常见于腐败后期至干尸化阶段，也是仓储害虫。<hr class="ediv">
<span style="color:#8a6030">注：本种暂无公开发表的可靠积温模型，鉴定记录表中不纳入 PMI<sub>min</sub> 计算，仅作腐败阶段参考。</span>`,
              },
              {
                id: "necrobia-ruficollis",
                name: "赤颈郭公甲",
                latin: "Necrobia ruficollis",
                isFly: false,
                images: {
                  adult: "assets/redneck.png",
                },
                body: `<b>体型：</b>体长 3–6&nbsp;mm，前胸背板呈红色（颈区红色由此得名）<br>
<hr class="ediv">
<b>法医意义：</b><br>
与赤足郭公甲生态位相近，多见于腐败后期至干尸化阶段的干燥、含脂残余组织表面。<hr class="ediv">
<b>发育参数：</b><br>
发育起点温度 D<sub>0</sub> ≈ 14.51&nbsp;°C<br>
卵—成虫总有效积温 K<sub>总</sub>≈ 16418.4&nbsp;°C·h`,
              }
            ],
          }
        ],
      },
      {
        id: "silphidae",
        family: "埋葬甲科",
        latin: "Silphidae",
        genera: [
          {
            id: "nicrophorus",
            genus: "葬甲属",
            latin: "Nicrophorus",
            species: [
              {
                id: "nicrophorus-japonicus",
                name: "日覆葬甲",
                latin: "Nicrophorus japonicus",
                isFly: false,
                images: {
                  adult: "assets/nj.png",
                },
                body: `<b>体型：</b>体长 15–22&nbsp;mm，鞘翅黑色具两条橙红色横带<br>
<b>识别要点：</b>触角末节膨大呈锤状橙红色，鞘翅横带图案鲜明易辨<hr class="ediv">
<b>法医意义：</b><br>
埋葬甲科成虫具有掩埋小型尸体的习性，在人体案件中主要作为捕食性/腐食性演替种出现，多见于腐败中期以后，可协助判断尸体暴露环境（如是否靠近地表、林地）。<hr class="ediv">
<span style="color:#8a6030">注：埋葬甲的到达时间受尸体大小、掩埋方式影响极大，公开积温数据稀缺，本图鉴仅作演替阶段参考，不用于 PMImin 精确计算。</span>`,
              }
            ],
          },
          {
            id: "necrodes",
            genus: "巨山葬甲属",
            latin: "Necrodes",
            species: [
              {
                id: "necrodes-littoralis",
                name: "宽额葬甲",
                latin: "Necrodes littoralis",
                isFly: false,
                images: {
                  adult: "assets/nl.png",
                },
                body: `<b>体型：</b>体长 15–25&nbsp;mm，体色黑褐<br>
<hr class="ediv">
<b>法医意义：</b><br>
广布于欧亚大陆，幼虫及成虫均可在尸体上取食腐肉与其他昆虫幼虫，多在腐败中后期出现，可作为该阶段的辅助指示种。<hr class="ediv">
<span style="color:#8a6030">注：暂无充分的公开积温模型数据，本图鉴仅作演替阶段参考，不用于 PMImin 精确计算。</span>`,
              }
            ],
          }
        ],
      },
      {
        id: "staphylinidae",
        family: "隐翅甲科",
        latin: "Staphylinidae",
        genera: [
          {
            id: "creophilus",
            genus: "大隐翅甲属",
            latin: "Creophilus",
            species: [
              {
                id: "creophilus-spp",
                name: "大隐翅甲",
                latin: "Creophilus maxillosus",
                isFly: false,
                images: {
                  larva: "assets/larva/cm_larva.png",
                  adult: "assets/cmb.png",
                },
                body: `<b>体型：</b>体长 15–22&nbsp;mm，黑色，鞘翅短小仅覆盖前胸部分，腹部裸露且可上翘<br>
<b>识别要点：</b>鞘翅后缘及胸部具灰白色绒毛斑纹，性情凶猛，受惊时腹部上翘似蝎尾<hr class="ediv">
<b>法医意义：</b><br>
专门捕食蝇类幼虫及蛹，其出现本身不直接指示 PMI，但提示尸体已存在足够长时间以吸引捕食性昆虫群落建立，可作为"腐败已进行一段时间"的间接证据。<hr class="ediv">
<span style="color:#8a6030">注：作为捕食性天敌，其到达时间依赖猎物种群密度而非尸体本身的腐败进程，不适用于积温法直接计算 PMI，仅作演替阶段参考。</span>`,
              }
            ],
          }
        ],
      }
    ],
  },
  {
    id: "hymenoptera",
    order: "膜翅目",
    latin: "Hymenoptera",
    families: [
      {
        id: "pteromalidae",
        family: "金小蜂科",
        latin: "Pteromalidae",
        genera: [
          {
            id: "nasonia",
            genus: "集金小蜂属",
            latin: "Nasonia",
            species: [
              {
                id: "nasonia-vitripennis",
                name: "丽蝇蛹集金小蜂",
                latin: "Nasonia vitripennis",
                isFly: false,
                images: {
                  adult: "assets/nv.png",
                },
                body: `<b>体型：</b>体长约 2–3&nbsp;mm，体色黑褐，雌虫具短产卵器<br>
<b>识别要点：</b>体型微小，常需借助放大镜或显微镜观察；多围绕蝇蛹周边活动<hr class="ediv">
<b>法医意义：</b><br>
一种寄生蜂，专门寄生于丽蝇、麻蝇等的蛹内，产卵于宿主蛹壳中。其出现提示现场已有蝇蛹存在一段时间（寄生蜂需要宿主先化蛹才能产卵），可作为佐证 PMI 下限的间接证据，但本身不直接构成积温计算对象。<hr class="ediv">
<span style="color:#8a6030">注：作为寄生性天敌，其发育依赖宿主蛹龄，不适用于独立的积温法 PMI 计算，仅作辅助佐证。</span>`,
              }
            ],
          }
        ],
      }
    ],
  }
];

// ── 法医生态与到达/定殖资料 ──────────────────────────────
// 只有用于案件生成的早期/中期定殖蝇保留小时范围；这些范围是明确标注的
// 「游戏场景先验」，不是物种固定常数，也不是可直接用于真实司法鉴定的数据。
// 对演替参考种不再虚构精确到小时的到达范围，而以腐败阶段和先决条件描述。
// arrival.event 区分「成虫首次到达」与真正能和幼虫年龄衔接的「产卵/产幼虫」。
// 精确案件仍应结合地区、季节、天气、室内外和尸体可接近性选择本地研究数据。
const FORENSIC_ECOLOGY = {
  "lucilia-sericata": {
    colonizationRole: "先驱定殖种",
    arrival: { event: "产卵", outdoorExposed: { earliestHours: 1, typicalRangeHours: [1, 4] }, indoorAccessible: { earliestHours: 4, typicalRangeHours: [8, 24] } },
    decompositionStages: ["fresh", "earlyDecay", "bloat"],
    habitat: ["outdoor", "indoorAccessible"], seasons: ["spring", "summer", "autumn"],
    pmiPolicy: "development", evidenceLevel: "moderate",
  },
  "chrysomya-megacephala": {
    colonizationRole: "先驱定殖种",
    arrival: { event: "产卵", outdoorExposed: { earliestHours: 1, typicalRangeHours: [1, 6] }, indoorAccessible: { earliestHours: 4, typicalRangeHours: [8, 24] } },
    decompositionStages: ["fresh", "earlyDecay", "bloat"],
    habitat: ["outdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "development", evidenceLevel: "moderate",
  },
  "chrysomya-rufifacies": {
    colonizationRole: "早期定殖／兼性捕食种",
    arrival: { event: "产卵", outdoorExposed: { earliestHours: 2, typicalRangeHours: [6, 48] }, indoorAccessible: { earliestHours: 12, typicalRangeHours: [24, 96] } },
    decompositionStages: ["fresh", "earlyDecay", "bloat", "activeDecay"],
    habitat: ["outdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "developmentWithEcologyWarning", evidenceLevel: "low",
  },
  "chrysomya-nigripes": {
    colonizationRole: "膨胀期后定殖种",
    // 文献支持“膨胀期后”，但不支持一个跨地区固定小时值；下列仅为当前游戏情境先验。
    arrival: { event: "产卵", outdoorExposed: { earliestHours: 48, typicalRangeHours: [72, 120] }, indoorAccessible: { earliestHours: 96, typicalRangeHours: [120, 240] } },
    decompositionStages: ["bloat", "activeDecay", "advancedDecay", "skeletal"],
    habitat: ["warmOutdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "development", evidenceLevel: "low",
  },
  "chrysomya-albiceps": {
    colonizationRole: "早期定殖／兼性捕食种",
    arrival: { event: "产卵", outdoorExposed: { earliestHours: 1, typicalRangeHours: [2, 24] }, indoorAccessible: { earliestHours: 8, typicalRangeHours: [12, 72] } },
    decompositionStages: ["fresh", "earlyDecay", "bloat", "activeDecay"],
    habitat: ["outdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "developmentWithEcologyWarning", evidenceLevel: "low",
  },
  "calliphora-vicina": {
    colonizationRole: "冷季先驱定殖种",
    arrival: { event: "产卵", outdoorExposed: { earliestHours: 1, typicalRangeHours: [2, 24] }, indoorAccessible: { earliestHours: 4, typicalRangeHours: [8, 36] } },
    decompositionStages: ["fresh", "earlyDecay", "bloat"],
    habitat: ["outdoor", "indoorAccessible"], seasons: ["winter", "spring", "autumn"],
    pmiPolicy: "development", evidenceLevel: "moderate",
  },
  "calliphora-vomitoria": {
    colonizationRole: "冷季先驱定殖种",
    arrival: { event: "产卵", outdoorExposed: { earliestHours: 2, typicalRangeHours: [4, 24] }, indoorAccessible: { earliestHours: 8, typicalRangeHours: [12, 48] } },
    decompositionStages: ["fresh", "earlyDecay", "bloat"],
    habitat: ["outdoor", "forest", "indoorAccessible"], seasons: ["winter", "spring", "autumn"],
    pmiPolicy: "development", evidenceLevel: "low",
  },
  "phormia-regina": {
    colonizationRole: "先驱定殖种",
    arrival: { event: "产卵", outdoorExposed: { earliestHours: 1, typicalRangeHours: [1, 8] }, indoorAccessible: { earliestHours: 6, typicalRangeHours: [8, 30] } },
    decompositionStages: ["fresh", "earlyDecay", "bloat"],
    habitat: ["outdoor", "indoorAccessible"], seasons: ["spring", "summer", "autumn"],
    pmiPolicy: "development", evidenceLevel: "moderate",
  },
  "sarcophaga-spp": {
    colonizationRole: "先驱定殖种",
    arrival: { event: "产幼虫", outdoorExposed: { earliestHours: 2, typicalRangeHours: [2, 12] }, indoorAccessible: { earliestHours: 8, typicalRangeHours: [12, 36] } },
    decompositionStages: ["fresh", "earlyDecay", "bloat"],
    habitat: ["outdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "development", evidenceLevel: "moderate",
  },
  "musca-domestica": {
    colonizationRole: "早期次生定殖种",
    arrival: { event: "产卵", outdoorExposed: { earliestHours: 12, typicalRangeHours: [12, 72] }, indoorAccessible: { earliestHours: 8, typicalRangeHours: [12, 72] } },
    decompositionStages: ["earlyDecay", "bloat", "activeDecay"],
    habitat: ["indoorAccessible", "urbanOutdoor"], seasons: ["warmSeason"],
    pmiPolicy: "developmentWithEcologyWarning", evidenceLevel: "low",
  },
  "hydrotaea-spinigera": {
    colonizationRole: "中晚期腐食／捕食种",
    arrival: { event: "成虫或幼虫出现", outdoorExposed: null, indoorAccessible: null },
    successionWindow: "活跃腐败期至高度腐败期；具体出现时间高度依赖地区和环境",
    decompositionStages: ["activeDecay", "advancedDecay", "dryRemains"],
    habitat: ["outdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "successionOnly", evidenceLevel: "low",
  },
  "hermetia-illucens": {
    colonizationRole: "晚期定殖种",
    arrival: { event: "产卵或幼虫出现", outdoorExposed: null, indoorAccessible: null },
    successionWindow: "暖热、潮湿条件下多见于活跃腐败至高度腐败期；不可用固定天数概括",
    decompositionStages: ["activeDecay", "advancedDecay"],
    habitat: ["warmOutdoor", "moistOrganicMatter"], seasons: ["warmSeason"],
    pmiPolicy: "successionOnly", evidenceLevel: "low",
  },
  "dermestes-maculatus": {
    colonizationRole: "晚期定殖种",
    arrival: { event: "成虫或幼虫出现", outdoorExposed: null, indoorAccessible: null },
    successionWindow: "通常与组织干燥相关；不同气候和暴露条件下可从腐败期延续至干尸化",
    decompositionStages: ["advancedDecay", "dryRemains", "skeletal"],
    habitat: ["dryOutdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "successionOnly", evidenceLevel: "moderate",
  },
  "necrobia-rufipes": {
    colonizationRole: "晚期定殖种",
    arrival: { event: "成虫或幼虫出现", outdoorExposed: null, indoorAccessible: null },
    successionWindow: "高度腐败至干燥残骸期；依赖干燥、含脂组织和地区条件",
    decompositionStages: ["advancedDecay", "dryRemains"],
    habitat: ["dryOutdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "successionOnly", evidenceLevel: "low",
  },
  "necrobia-ruficollis": {
    colonizationRole: "晚期定殖种",
    arrival: { event: "成虫或幼虫出现", outdoorExposed: null, indoorAccessible: null },
    successionWindow: "高度腐败至骨骼化期；不可从物种身份单独推出固定到达小时",
    decompositionStages: ["advancedDecay", "dryRemains"],
    habitat: ["dryOutdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "successionOnly", evidenceLevel: "low",
  },
  "nicrophorus-japonicus": {
    colonizationRole: "次生腐食种",
    arrival: { event: "成虫出现", outdoorExposed: null, indoorAccessible: null },
    successionWindow: "主要受林地、生境和尸体大小影响，不设置通用小时范围",
    decompositionStages: ["bloat", "activeDecay", "advancedDecay"],
    habitat: ["forest", "nearSurfaceOutdoor"], seasons: ["spring", "summer", "autumn"],
    pmiPolicy: "successionOnly", evidenceLevel: "low",
  },
  "necrodes-littoralis": {
    colonizationRole: "次生腐食／捕食种",
    arrival: { event: "成虫或幼虫出现", outdoorExposed: null, indoorAccessible: null },
    successionWindow: "多与大型尸体的活跃腐败至后期腐败相关；室内进入受限",
    decompositionStages: ["activeDecay", "advancedDecay"],
    habitat: ["outdoor", "largeCarrion"], seasons: ["spring", "summer"],
    pmiPolicy: "successionOnly", evidenceLevel: "moderate",
  },
  "creophilus-spp": {
    colonizationRole: "次生捕食种",
    arrival: { event: "成虫或幼虫出现", outdoorExposed: null, indoorAccessible: null },
    successionWindow: "随可供捕食的蝇幼虫和蛹出现，不设置固定到达小时",
    decompositionStages: ["bloat", "activeDecay", "advancedDecay"], requiresOtherLarvae: true,
    habitat: ["outdoor", "indoorAccessible"], seasons: ["spring", "summer", "autumn"],
    pmiPolicy: "successionOnly", evidenceLevel: "low",
  },
  "nasonia-vitripennis": {
    colonizationRole: "寄生性天敌",
    arrival: { event: "寄生行为或成虫出现", outdoorExposed: null, indoorAccessible: null },
    successionWindow: "必须先有适龄蝇蛹；时间取决于宿主种类、蛹龄与可接近性",
    decompositionStages: ["activeDecay", "advancedDecay"], requiresFlyPupae: true,
    habitat: ["outdoor", "indoorAccessible"], seasons: ["warmSeason"],
    pmiPolicy: "successionOnly", evidenceLevel: "low",
  },
};

// 将生态资料附加到对应种级条目，供图鉴与案件生成器共同读取。
INSECT_ATLAS.forEach((order) => order.families.forEach((family) =>
  family.genera.forEach((genus) => (genus.species || []).forEach((species) => {
    species.forensicEcology = FORENSIC_ECOLOGY[species.id] || null;
  }))
));

// 同时保留原有的平铺结构以便向后兼容
const ENTRIES_LEGACY = {
  blowfly: {
    name: "丝光绿蝇",
    latin: "Lucilia sericata",
    body: `<b>体型：</b>8–10 mm，金属绿色光泽<br><b>触角：</b>三节型，羽状刚毛<br><b>复眼：</b>雄宽接眼，雌离眼<hr class="ediv"><b>法医意义：</b><br>最常见先驱物种。死后 1–4h 内产卵于天然开口（眼、口、伤口）。<hr class="ediv"><b>发育时间（25°C）：</b><br>卵 12h · 一龄 18h · 二龄 24h<br>三龄 72h · 蛹 168h · 羽化 336h<br><b>最低发育温度：</b>10°C`,
  },
  flesh: {
    name: "麻蝇",
    latin: "Sarcophaga spp.",
    body: `<b>体型：</b>10–15 mm，灰黑色<br><b>胸部：</b>三条纵行暗纹<br><b>腹部：</b>棋盘纹，末端红色<hr class="ediv"><b>法医意义：</b><br>卵胎生，直接产活幼虫。到达略慢于绿蝇，可交叉验证 PMI。<hr class="ediv"><b>发育时间（25°C）：</b><br>幼虫产出 6h · 一龄 24h · 二龄 48h<br>三龄 96h · 蛹 192h · 羽化 384h<br><b>最低发育温度：</b>12°C`,
  },
  cheese: {
    name: "酪蝇",
    latin: "Piophila casei",
    body: `<b>体型：</b>3–5 mm，黑褐色小型<br><b>特征：</b>幼虫可弹跳<hr class="ediv"><b>法医意义：</b><br>晚期演替物种，出现标志死亡已达数周以上（干燥腐败期）。<hr class="ediv"><b>发育时间（25°C）：</b><br>卵 48h · 一龄 72h · 二龄 120h<br>三龄 240h · 蛹 480h · 羽化 720h<br><b>最低发育温度：</b>8°C`,
  },
  beetle: {
    name: "隐翅虫",
    latin: "Creophilus spp.",
    body: `<b>体型：</b>15–22 mm，黑色，捕食性<br><b>鞘翅：</b>灰色绒毛斑纹<hr class="ediv"><b>法医意义：</b><br>捕食蝇幼虫。出现提示尸体已存在数天以上，本身不作 PMI 直接指标。<hr class="ediv"><b>发育时间（25°C）：</b><br>卵 72h · 一龄 120h · 二龄 240h<br>三龄 480h · 蛹 720h · 羽化 1200h<br><b>最低发育温度：</b>14°C`,
  },
  coffin: {
    name: "棺材蝇",
    latin: "Conicera tibialis",
    body: `<b>体型：</b>1–2 mm，黑色极小型<br><b>特征：</b>无翅或翅退化，生活于深层土壤<hr class="ediv"><b>法医意义：</b><br>极晚期演替物种，仅见于埋葬遗体。出现即提示死亡超过数月至数年。<hr class="ediv"><b>发育时间（15°C）：</b><br>卵至成虫约 300–400 天<br><b>最低发育温度：</b>5°C`,
  },
  dermestes: {
    name: "皮蠹",
    latin: "Dermestes maculatus",
    body: `<b>体型：</b>6–10 mm，深褐色，椭圆形<br><b>特征：</b>全身密布鳞毛，幼虫多毛<hr class="ediv"><b>法医意义：</b><br>干燥腐败期演替物种，专食角质与骨骼周围残余软组织。<hr class="ediv"><b>发育时间（25°C）：</b><br>卵 3–5 天 · 幼虫期 40–50 天<br>蛹 8–15 天<br><b>最低发育温度：</b>15°C`,
  },
};
