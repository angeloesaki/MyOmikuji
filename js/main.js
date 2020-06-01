"use script";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    // const results = ["大吉", "中吉", "凶", "末吉"];
    // const results = ["大吉", "大吉", "大吉", "凶"];

    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // 上２行と下１行は同じ意味
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    // btn.textContent = "hit!";
    // btn.textContent = n;
    // switch (n) {
    //   case 0:
    //     btn.textContent = "大吉";
    //     break;
    //   case 1:
    //     btn.textContent = "中吉";
    //     break;
    //   case 2:
    //     btn.textContent = "凶";
    //     break;
    // }

    if (btn.classList.contains("inactive") === true) {
      return;
    }

    // 以下は確立操作
    const n = Math.random();
    if (n < 0.23) {
      btn.textContent = "大吉"; // 23%
    } else if (n < 0.47) {
      btn.textContent = "吉"; // 24%
    } else if (n < 0.57) {
      btn.textContent = "中吉"; // 10%
    } else if (n < 0.7) {
      btn.textContent = "小吉"; // 13%
    } else if (n < 0.89) {
      btn.textContent = "末吉"; // 19%
    } else {
      btn.textContent = "凶"; // 11%
    }

    btn.classList.add("inactive");
  });

  const youbi = ["日", "月", "火", "水", "木", "金", "土"];

  const td = new Date();
  const y = td.getFullYear();
  const m = td.getMonth() + 1;
  const date = td.getDate();
  const day = td.getDay();
  // console.log(`${y}年${m}月${date}日（${youbi[day]}）`);

  const today = document.querySelector(".today");
  function showTodaysDate() {
    today.textContent = `${y}年${m}月${date}日(${youbi[day]})のあなたの運勢は...`;
  }

  showTodaysDate();
}
