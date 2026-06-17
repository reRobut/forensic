// 法医昆虫图鉴数据
// 结构：目 > 科 > 属（最小单位）> 种（可选）

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
            genus: "丝光绿蝇属",
            latin: "Lucilia",
            species: [],
            entry: {
              /* 丝光绿蝇 */
            },
          },
          {
            id: "chrysomya",
            genus: "金蝇属",
            latin: "Chrysomya",
            species: [],
            entry: {
              name: "大头金蝇",
              latin: "Chrysomya megacephala",
              body: "",
            },
          },
        ],
      },
      {
        id: "sarcophagidae",
        family: "麻蝇科",
        latin: "Sarcophagidae",
        genera: [
          {
            id: "sarcophaga",
            genus: "麻蝇属",
            latin: "Sarcophaga",
            species: [
              // 待补充
            ],
            entry: {
              name: "麻蝇",
              latin: "Sarcophaga spp.",
              body: `<b>体型：</b>10–15 mm，灰黑色<br><b>胸部：</b>三条纵行暗纹<br><b>腹部：</b>棋盘纹，末端红色<hr class="ediv"><b>法医意义：</b><br>卵胎生，直接产活幼虫。到达略慢于绿蝇，可交叉验证 PMI。<hr class="ediv"><b>发育时间（25°C）：</b><br>幼虫产出 6h · 一龄 24h · 二龄 48h<br>三龄 96h · 蛹 192h · 羽化 384h<br><b>最低发育温度：</b>12°C`,
            },
          },
        ],
      },
      {
        id: "muscidae",
        family: "蝇科",
        latin: "Muscidae",
        genera: [
          // 待补充
        ],
      },
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
              // 待补充
            ],
            entry: {
              name: "皮蠹",
              latin: "Dermestes maculatus",
              body: `<b>体型：</b>6–10 mm，深褐色，椭圆形<br><b>特征：</b>全身密布鳞毛，幼虫多毛<hr class="ediv"><b>法医意义：</b><br>干燥腐败期演替物种，专食角质与骨骼周围残余软组织。<hr class="ediv"><b>发育时间（25°C）：</b><br>卵 3–5 天 · 幼虫期 40–50 天<br>蛹 8–15 天<br><b>最低发育温度：</b>15°C`,
            },
          },
        ],
      },
      {
        id: "trogidae",
        family: "郭公甲科",
        latin: "Trogidae",
        genera: [
          // 待补充
        ],
      },
      {
        id: "silphidae",
        family: "埋葬甲科",
        latin: "Silphidae",
        genera: [
          // 待补充
        ],
      },
      {
        id: "histeridae",
        family: "阎甲科",
        latin: "Histeridae",
        genera: [
          // 待补充
        ],
      },
      {
        id: "staphylinidae",
        family: "隐翅甲科",
        latin: "Staphylinidae",
        genera: [
          {
            id: "creophilus",
            genus: "隐翅虫属",
            latin: "Creophilus",
            species: [
              // 待补充
            ],
            entry: {
              name: "隐翅虫",
              latin: "Creophilus spp.",
              body: `<b>体型：</b>15–22 mm，黑色，捕食性<br><b>鞘翅：</b>灰色绒毛斑纹<hr class="ediv"><b>法医意义：</b><br>捕食蝇幼虫。出现提示尸体已存在数天以上，本身不作 PMI 直接指标。<hr class="ediv"><b>发育时间（25°C）：</b><br>卵 72h · 一龄 120h · 二龄 240h<br>三龄 480h · 蛹 720h · 羽化 1200h<br><b>最低发育温度：</b>14°C`,
            },
          },
        ],
      },
      {
        id: "nitidulidae",
        family: "露尾甲科",
        latin: "Nitidulidae",
        genera: [
          // 待补充
        ],
      },
    ],
  },
];

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
