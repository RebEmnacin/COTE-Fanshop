// ============================================================
// DATA.JS — Add all your books here
// Each book follows the same object structure below
// ============================================================

const books = [
  {
    id: 1,
    title: "Classroom of the Elite",
    subtitle: "Year 1 Volume 1",
    arc: "yearOne",        // yearOne | yearTwo | yearThree | spinOffs
    format: "novel",       // novel | manga
    price: 14.99,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e_light_novel_volume_1_cover.jpg/220px-Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e_light_novel_volume_1_cover.jpg",
    description: "On the surface, Koudo Ikusei Senior High School is a utopia. The students enjoy an unparalleled amount of freedom, and it is ranked highly in Japan. However, the reality is less idyllic. Four classes, A through D, are ranked in order of merit, and only the top classes receive preferential treatment.",
    date: "2015-05-25",   // for oldest/newest sort — format: YYYY-MM-DD
    trending: 2,           // lower number = more trending (1 = #1 trending)
  },
  {
    id: 2,
    title: "Classroom of the Elite",
    subtitle: "Year 1 Volume 2",
    arc: "yearOne",
    format: "novel",
    price: 14.99,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Classroom_of_the_Elite_LN_volume_2_cover.jpg/220px-Classroom_of_the_Elite_LN_volume_2_cover.jpg",
    description: "Class D continues to struggle in the rankings as their classmates plot and scheme against each other. Ayanokoji begins to unravel the mysteries behind the school's true purpose.",
    date: "2015-08-25",
    trending: 4,
  },
  {
    id: 3,
    title: "Classroom of the Elite",
    subtitle: "Year 2 Volume 1",
    arc: "yearTwo",
    format: "novel",
    price: 15.99,
    image: "https://m.media-amazon.com/images/I/71s8MBDYFAL._AC_UF1000,1000_QL80_.jpg",
    description: "A White Room agent infiltrates the new first-years to expel Ayanokoji, while Class 2-D navigates a written exam paired with the unpredictable first-years to survive without losing anyone.",
    date: "2020-01-25",
    trending: 1,
  },
  {
    id: 4,
    title: "Classroom of the Elite",
    subtitle: "Year 3 Volume 3",
    arc: "yearThree",
    format: "novel",
    price: 15.99,
    image: "https://preview.redd.it/ln-year-3-volume-3-early-illustrations-thread-v0-8ue24ut9lj2g1.jpg?width=640&crop=smart&auto=webp&s=18d49049ad947d7d479c3bb66164d89ae5649fbb",
    description: "Class C faces a paintball-style class-vs-class survival exam on an uninhabited island, where Ayanokoji forms an alliance with Class D to repel Class B's ambush — only for the volume to reveal this brutal showdown was just a preliminary round for a far more complex trust-and-betrayal exam to come.",
    date: "2024-11-25",
    trending: 3,
  },
  {
    id: 5,
    title: "Classroom of the Elite",
    subtitle: "Volume 0 — White Room",
    arc: "yearOne",
    format: "novel",
    price: 14.99,
    image: "https://static.wikia.nocookie.net/youkoso-jitsuryoku/images/8/84/Youkoso_LN_Volume_0_Cover.jpg",
    description: "A prequel story set roughly twenty years before Ayanokoji's enrollment at Advanced Nurturing High School, covering the origins of the White Room and young Kiyotaka's life inside it.",
    date: "2022-12-23",
    trending: 5,
  },
  {
    id: 6,
    title: "Classroom of the Elite",
    subtitle: "Manga Volume 1",
    arc: "yearOne",
    format: "manga",
    price: 12.99,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Classroom_of_the_Elite_manga_volume_1_cover.jpg/220px-Classroom_of_the_Elite_manga_volume_1_cover.jpg",
    description: "The manga adaptation of Year 1. Follow Ayanokoji and Class D as they uncover the truth behind the school's meritocracy system, now in illustrated form.",
    date: "2016-06-25",
    trending: 6,
  },
  {
    id: 7,
    title: "√Horikita",
    subtitle: "Spin-off Volume 1",
    arc: "spinOffs",
    format: "manga",
    price: 12.99,
    image: "https://static.wikia.nocookie.net/youkoso-jitsuryoku/images/5/5e/Root_Horikita_Volume_1_Cover.jpg",
    description: "A what-if spin-off story set in a parallel world, focusing on Kiyotaka Ayanokoji and Suzune Horikita in alternate circumstances outside the main timeline.",
    date: "2019-03-25",
    trending: 7,
  },
];

// ============================================================
// HOW TO ADD A NEW BOOK:
// Copy the block below, paste it inside the books array above,
// and fill in the details. Make sure to add a comma after the
// closing } of the previous book entry.
//
// {
//   id: 8,                          ← increment from last id
//   title: "Classroom of the Elite",
//   subtitle: "Year X Volume X",
//   arc: "yearOne",                 ← yearOne | yearTwo | yearThree | spinOffs
//   format: "novel",                ← novel | manga
//   price: 14.99,
//   image: "path/to/image.jpg",
//   description: "...",
//   date: "YYYY-MM-DD",
//   trending: 8,                    ← rank (lower = more trending)
// },
// ============================================================
