let courses = [
  {
    title: "SMM",

    howLong: 3,
  },

  {
    title: "Dev",

    howLong: 6,
  },

  {
    title: "Graph",

    howLong: 4,
  },
];

let earnings = {
  total: 0,

  max: 0,

  min: 0,
};

let m = 0;

let w = 0;

let average_age = 0;

let smm = 0;

let dev = 0;

let graph = 0;

let students = [
  {
    sex: "m",

    age: 14,

    payment: 1220000,

    course: {
      title: "SMM",
    },
  },

  {
    sex: "m",

    age: 24,

    payment: 1883000,

    course: {
      title: "Graph",
    },
  },

  {
    sex: "w",

    age: 16,

    payment: 2190000,

    course: {
      title: "Dev",
    },
  },

  {
    sex: "m",

    age: 19,

    payment: 718000,

    course: {
      title: "Graph",
    },
  },

  {
    sex: "w",

    age: 15,

    payment: 2195000,

    course: {
      title: "Dev",
    },
  },

  {
    sex: "m",

    age: 24,

    payment: 460000,

    course: {
      title: "SMM",
    },
  },

  {
    sex: "w",

    age: 14,

    payment: 560000,

    course: {
      title: "SMM",
    },
  },

  {
    sex: "w",

    age: 22,

    payment: 160000,

    course: {
      title: "Dev",
    },
  },

  {
    sex: "m",

    age: 26,

    payment: 883000,

    course: {
      title: "Graph",
    },
  },

  {
    sex: "w",

    age: 26,

    payment: 750000,

    course: {
      title: "Dev",
    },
  },

  {
    sex: "m",

    age: 23,

    payment: 212000,

    course: {
      title: "Graph",
    },
  },

  {
    sex: "w",

    age: 24,

    payment: 883000,

    course: {
      title: "Graph",
    },
  },

  {
    sex: "w",

    age: 27,

    payment: 190000,

    course: {
      title: "Dev",
    },
  },

  {
    sex: "w",

    age: 19,

    payment: 210000,

    course: {
      title: "Graph",
    },
  },

  {
    sex: "w",

    age: 21,

    payment: 770000,

    course: {
      title: "Dev",
    },
  },

  {
    sex: "m",

    age: 18,

    payment: 1200000,

    course: {
      title: "SMM",
    },
  },

  {
    sex: "w",

    age: 51,

    payment: 880000,

    course: {
      title: "SMM",
    },
  },

  {
    sex: "m",

    age: 51,

    payment: 2430000,

    course: {
      title: "Dev",
    },
  },

  {
    sex: "w",

    age: 33,

    payment: 1277000,

    course: {
      title: "Graph",
    },
  },

  {
    sex: "w",

    age: 21,

    payment: 2750000,

    course: {
      title: "Dev",
    },
  },
];

// ?? ???????? ?????????????? ?????????? ???????? ?????????????? ??????????, ?? ?????????????? ?????????????? ?????????????????? ??????????????????. ???????????? ???? ?????? ?????????????? ???? ??????????-???? ?????????? ?? ???????????? ???? ????????????????. ?? ?????????????????? ???? ?????????? ??????, ??????????????, ????????????, ?? ?????????? ????????, ?????????????? ?????? ??????????????.*

// 1. ???????????????? ?????????????????? ???????? howLong ???????????? ?????????? course, ?????????? ?? title. HowLong - ??????????, ???????????????????? ?????????????? ?????????????? ?????????????? ????????*

// 2. ?????????????????? ???????????????????? ?????????????? ?? ?????????????????? ???????????? ???????????????????? m ?? w*

// 3. ?????????????????? ?????????????????? ???????????????? ???????????? ?? earning.total*

// 4. ???????????? ?????? ???????????? ???????? ???????????? ???? ???????????????? ?? earning.max*

// 5. ???????????? ?????? ???????????? ???????? ???????????? ???? ???????????????? ?? earning.min*

// 6. ?????????????????? ?????????????? ?????????????????? ?????????????? ???? ???????????? ???????????? dev, smm ?? graph*

// 7. ?????????????????? ?????????????? ?????????????? ?????????????????? ?? average_age*

const setup = () => {
  function gugu(popo) {
    let thisAverage = 0;
    let temp = [];
    for (let item of popo) {
      for (let item2 of courses) {
        if (item.course.title === item2.title) {
          item.course.howLong = item2.howLong;
          temp.push(item.payment * item2.howLong);
          earnings.total = temp.reduce((a, b) => a + b);
        }
      }
      if (item.sex === "w") {
        w++;
      }
      if (item.sex === "m") {
        m++;
      }
      if (item.course.title === "Dev") {
        dev++;
      } else if (item.course.title === "SMM") {
        smm++;
      } else if (item.course.title === "Graph") {
        graph++;
      }
      thisAverage += item.age;
      average_age = thisAverage / students.length;
    }
    earnings.max = Math.max(...temp);
    earnings.min = Math.min(...temp);
    console.log("Task 1" ,students );
    console.log("Task 2", "GenderMen:", m, "GenderWomen:", w );
    console.log( "Tasks 3 4 5  ",earnings,);
    console.log("Task 6","SMM:", smm, "Dev:", dev, "Graph:", graph, );
    console.log("Task 7","Average age of students:", average_age, );
  }

  gugu(students);
};
setup();
