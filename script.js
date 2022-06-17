const myTable = document.getElementById("myTable");
let trList = document.querySelectorAll("tr");
let btnList = document.querySelectorAll("button");
let inptList = document.querySelectorAll("input");

for (let i = 0; i < trList.length - 1; i++) {
  const btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    document.querySelector("input").style.display = "none";
  });
}

// trList.forEach(function (i) {
//   const btn = document.querySelector("button");
//   (function singlItter(index) {
//     btn.addEventListener("click", function () {
//       document.querySelector("input").style.display = "none";
//       console.log(index);
//     });
//   })(i);
//   myTable.appendChild(btn);
// });

// btnList.forEach(function (e) {
//   e.addEventListener("click", function () {
//     document.querySelector(inptList[i]).style.display = "none";
//   });
// });
