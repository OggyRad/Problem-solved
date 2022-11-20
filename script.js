let btnList = document.querySelectorAll(".btn");
console.log(btnList);

// btnList.forEach((element) => {
//   element.addEventListener("click", () => {
//     let currentRow = element.parentNode;
//     let currentInput = currentRow.querySelector("input");
//     if (currentInput.style.display === "none") {
//       currentInput.style.display = "block";
//     } else {
//       currentInput.style.display = "none";
//     }
//   });
// });

let tdList = document.querySelectorAll("td");
let disp = document.querySelector("input");

tdList.forEach((element) => {
  let currentBtn = element.childNodes[1];
  console.log(element.childNodes[0]);
  let currentDisp = element.childNodes[2];
  currentBtn.addEventListener("click", () => {
    if (currentDisp.style.display === "none") {
      currentDisp.style.display = "block";
    } else {
      currentDisp.style.display = "none";
    }
  });
});
