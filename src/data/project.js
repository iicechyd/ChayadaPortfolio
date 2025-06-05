const projectData = [
    {
      id: 1,
      image: "img/museumkku/cover_ms.png",
      title: "Museum Reservation System KKU",
      description: " Developed using PHP (Laravel), MySQL, and styled with Bootstrap, this system manages museum visit bookings with features like reservation verification, document attachments, activity scheduling, user role assignment, and booking history tracking, improving both accuracy and efficiency.",
      linkto : "https://reserve-museum.kku.ac.th/",
      tosource: "https://github.com/iicechyd/Museumkku",
      gallery: [
        "img/museumkku/cover_ms.png",
        "img/museumkku/ms01.png",
        "img/museumkku/ms02.png",
        "img/museumkku/ms03.png",
        "img/museumkku/ms04.png",
        "img/museumkku/ms05.png",
        "img/museumkku/ms06.png",
        "img/museumkku/ms07.png",
      ]
    },
    {
      id: 2,
      image: "img/grittaya/cover_grittaya.png",
      title: "Grittaya E-commerce Website",
      description: "Designed e-commerce website interfaces using Figma, and developed the frontend with Vue.js and Nuxt.js, styling the UI with Tailwind CSS. Key features included product display, blog, and links to external ordering channels.",
      tosource: "https://github.com/iicechyd/grittaya",
      gallery: [
        "img/grittaya/cover_grittaya.png",
        "img/grittaya/gty_01.png",
        "img/grittaya/gty_02.png",
        "img/grittaya/gty_03.png",
        "img/grittaya/gty_04.png",
        "img/grittaya/gty_05.png",
      ]
    },
    {
      id: 3,
      image: "img/funandlearning/fl_01.png",
      title: "Fun & Learning for Kids",
      description: "Developed a fun and educational mobile application for children using Kotlin. The app offers interactive games, quizzes, and animations. Parents can also track their child's progress and access parenting resources.",
      tosource: "https://github.com/iicechyd/FunAndLearning_for_Kids",
      gallery: [
        "img/funandlearning/fl_01.png",
        "img/funandlearning/fl_02.png",
        "img/funandlearning/fl_03.png",
      ]
    },
    {
      id: 4,
      image: "img/attendance/cover_attendance.png",
      title: "Student Attendance Management System",
      description: "Developed a student attendance management system using React.js, Node.js, MongoDB, and Tailwind CSS with features like user authentication, course & class scheduling, attendance tracking, student registration, lecturer course/session management, and student check-in and attendance record viewing.",
      tosource: "https://github.com/iicechyd/Student_Attendance",
      gallery: [
        "img/attendance/cover_attendance.png",
        "img/attendance/atd_01.png",
        "img/attendance/atd_02.png",
        "img/attendance/atd_03.png",
        "img/attendance/atd_04.png",
        "img/attendance/atd_05.png",
        "img/attendance/atd_06.png",
        "img/attendance/atd_07.png"
      ]
    },
    {
      id: 5,
      image: "img/attendancel_qanda/cover_atd_qa.png",
      title: "Attendance List And Q&A",
      description: "Developed a web-based Attendance List and Q&A system using Vue.js and Firebase (Firestore, Authentication) with role-based features for students (attendance, question answering) and teachers (student management, question creation, attendance review, answer review, and question review).",
      tosource: "https://github.com/iicechyd/AttendanceList_QandA",
      gallery: [
        "img/attendancel_qanda/cover_atd_qa.png",
        "img/attendancel_qanda/atd_qa01.png",
        "img/attendancel_qanda/atd_qa02.png",
        "img/attendancel_qanda/atd_qa03.png",
        "img/attendancel_qanda/atd_qa04.png",
        "img/attendancel_qanda/atd_qa05.png",
        "img/attendancel_qanda/atd_qa06.png",
        "img/attendancel_qanda/atd_qa07.png",
        "img/attendancel_qanda/atd_qa08.png",
      ]
    },
    {
      id: 6,
      image: "img/moneyheist/cover_moneyheist.png",
      title: "Money Heist",
      description: "Developed a Money Heist-themed game using Phaser 3, where players control a thief collecting coins while avoiding randomly falling bombs. The game ends upon collision with a bomb, and difficulty increases as more coins are collected. This project highlights skills in game mechanics, collision detection, and difficulty scaling.",
      linkto: "https://iicechyd.github.io/MoneyHeist/",
      tosource: "https://github.com/iicechyd/MoneyHeist",
      gallery: [
        "img/moneyheist/moneyheist.png",
        "img/moneyheist/moneyheist2.png",
        "img/moneyheist/moneyheist3.png",
      ]
    },
    {
      id: 7,
      image: "img/theforest/cover_theforest.png",
      title: "The Forest",
      description: "2D adventure game built with Phaser 3 and modern JavaScript. Designed tilemap-based levels where players collect points to unlock areas and escape a mysterious forest while avoiding traps and pitfalls.",
      linkto: "https://iicechyd.github.io/TheForest/",
      tosource: "https://github.com/iicechyd/TheForest",
      gallery: [
        "img/theforest/cover_theforest.png",
        "img/theforest/theforest_01.png",
        "img/theforest/theforest_02.png",
        "img/theforest/theforest_03.png",
      ]
    },
    {
      id: 8,
      image: "img/vrweb/cover_vrweb.png",
      title: "WebVR By A-Frame",
      description: "Developed a web-based VR experience using A-Frame and HTML (ECS architecture) to present 10 interesting facts about the universe. The project included interactive 3D models (planets, stars), background music, narration, images, and animations.",
      linkto: "https://iicechyd.github.io/VRWebByA-Frame/",
      tosource: "https://github.com/iicechyd/VRWebByA-Frame",
      gallery: [
        "img/vrweb/cover_vrweb.png",
        "img/vrweb/vrweb1.png",
        "img/vrweb/vrweb2.png",
      ]
    },
    {
      id: 9,
      image: "img/doggyjump/doggyjump.png",
      title: "Doggy Jump",
      description: "Developed an infinite jumper game where the player controls a dog character that leaps from one floating platform to another to collect as many bones as possible. The game ends immediately if the character falls. Built using Phaser 3 with modern JavaScript.",
      linkto: "https://iicechyd.github.io/DoggyJump/",
      tosource: "https://github.com/iicechyd/DoggyJump",
      gallery: [
        "img/doggyjump/doggyjump.png",
        "img/doggyjump/doggyjump2.png",
      ]
    },
    // {
    //   id: 10,
    //   image: "img/villagers_m/cover_vl.png",
    //   title: "Villagers Matching Game",
    //   description: "Developed a matching game using VueJS and Vuetify where players match images of characters from Stardew Valley. The objective is to pair all images correctly to win the game.",
    //   linkto: "https://iicechyd.github.io/MobileAndWeb2566/VillagersMatching/work3.html",
    //   tosource: "https://github.com/iicechyd/MobileAndWeb2566/tree/main/VillagersMatching",
    //   gallery: [
    //     "img/villagers_m/cover_vl.png",
    //     "img/villagers_m/vl_01.png",
    //     "img/villagers_m/vl_02.png",
    //   ]
    // },
    // {
    //   id: 11,
    //   image: "img/fruits_m/cover_fruits.png",
    //   title: "Fruits Matching Game",
    //   description: "Developed a matching game using jQuery and Bootstrap where players match identical fruit images. The objective is to pair all images correctly to win the game.",
    //   linkto: "https://iicechyd.github.io/MobileAndWeb2566/FruitsMatching/work1.html",
    //   tosource: "https://github.com/iicechyd/MobileAndWeb2566/tree/main/FruitsMatching",
    //   gallery: [
    //     "img/fruits_m/cover_fruits.png",
    //     "img/fruits_m/fruits1.png",
    //     "img/fruits_m/fruits2.png",
    //   ]
    // },
    // {
    //   id: 12,
    //   image: "img/animals_m/cover_an.png",
    //   title: "Animals Matching Game",
    //   description: "Developed a matching game using ReactJS where players match identical animal images. The objective is to pair all images correctly to win the game.",
    //   linkto: "https://iicechyd.github.io/MobileAndWeb2566/AnimalsMatching/work4.html",
    //   tosource: "https://github.com/iicechyd/MobileAndWeb2566/tree/main/AnimalsMatching",
    //   gallery: [
    //     "img/animals_m/cover_an.png",
    //     "img/animals_m/an_01.png",
    //     "img/animals_m/an_02.png",
    //   ]
    // },
  ];

  export default projectData;
