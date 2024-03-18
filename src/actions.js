const file = [
  {
    title: "work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "selfCare",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const buttons = Array.from(document.querySelectorAll("main header div p"));
buttons.forEach((ele) =>
  ele.addEventListener("click", (e) => {
    changeValues(e.target.id);
  })
);
function changeValues(val) {
  const buttonClicked = Array.from(
    document.querySelectorAll(`main header div #${val}`)
  );
  buttons.forEach((ele) => {
    if (ele === buttonClicked) ele.classList.add("active");
    else ele.classList.remove("active");
  });
  file.forEach((ele) => {
    const title = document.querySelector(`main #${ele.title} h1`);
    const p = document.querySelector(`main #${ele.title} > p`);
    if (val === "month") {
      title.innerHTML = `${ele.timeframes.monthly.current}hrs`;
      p.innerHTML = `Last month - ${ele.timeframes.monthly.previous}hrs`;
    } else if (val === "day") {
      title.innerHTML = `${ele.timeframes.daily.current}hrs`;
      p.innerHTML = `Last day - ${ele.timeframes.daily.previous}hrs`;
    } else if (val === "week") {
      title.innerHTML = `${ele.timeframes.weekly.current}hrs`;
      p.innerHTML = `Last week - ${ele.timeframes.weekly.previous}hrs`;
    }
  });
}
