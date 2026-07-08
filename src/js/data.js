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
    image: "../images/bookIMG/y1v1.png",
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
    image: "../images/bookIMG/y1v2.png",
    description: "Class D continues to struggle in the rankings as their classmates plot and scheme against each other. Ayanokoji begins to unravel the mysteries behind the school's true purpose.",
    date: "2015-08-25",
    trending: 4,
  },
  {
    id: 3,
    title: "Classroom of the Elite",
    subtitle: "Year 2 Volume 3",
    arc: "yearTwo",
    format: "novel",
    price: 15.99,
    image: "../images/bookIMG/y2v3.png",
    description: "As second years, Ayanokoji's class is paired with the incoming first years for a written exam. Only the second years face expulsion if their team scores poorly. Complicating things: one of the new first years is secretly a White Room agent sent to take Ayanokoji down.",
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
    image: "../images/bookIMG/y3v3.png",
    description: "Class C faces a paintball-style class-vs-class survival exam on an uninhabited island, where Ayanokoji forms an alliance with Class D to repel Class B's ambush — only for the volume to reveal this brutal showdown was just a preliminary round for a far more complex trust-and-betrayal exam to come.",
    date: "2024-11-25",
    trending: 3,
  },
  {
    id: 5,
    title: "Classroom of the Elite",
    subtitle: "Manga Volume 1",
    arc: "yearOne",
    format: "manga",
    price: 12.99,
    image: "../images/bookIMG/manga1.png",
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
    image: "../images/bookIMG/horikita1.png",
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


const merchandise =  [
  {
    id: 1,
    type: "keychains",
    title: "Ayanokouji CHIBI Keychain",
    price: 2.50, 
    image: "../images/merchandiseIMG/Keychain.png"
  },
  {
    id: 2,
    type: "figurines",
    title: "Sakayanagi Figurine",
    price: 5.00, 
    image: "../images/merchandiseIMG/sakayanagi figurine.webp"
  },
  {
    id: 3,
    type: "posters",
    title: "COTE Year 2 Poster",
    price: 2.50, 
    image: "../images/merchandiseIMG/cote poster.webp"
  },
]