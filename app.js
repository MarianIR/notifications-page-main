const notifyNumber = document.querySelector(".notifications-number");
const readBtn = document.querySelector(".mark-as-read-button");
const message = document.querySelectorAll(".active-notification");
const redDot = document.querySelectorAll(".red-dot");

notifyNumber.textContent = 3;

readBtn.addEventListener("click", (e) => {
  //   console.log("works");
  if (notifyNumber.textContent >= 1) {
    notifyNumber.textContent -= 3;
  }
  redDot.forEach((element) => {
    element.style.display = "none";
  });
  message.forEach((mess) => {
    mess.style.backgroundColor = "transparent";
  });
});

// message.forEach((mess) => {
//   mess.addEventListener("click", (e) => {
//     mess.style.backgroundColor = "transparent";
//   });
// });
// redDot.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     element.style.display = "none";
//   });
// });
