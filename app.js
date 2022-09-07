// Night Mode

if (localStorage.night === "true") {
  turnNightMode();
}
document.querySelector("#night-mode").addEventListener("click", () => {
  if (localStorage.night === "true") {
    localStorage.setItem("night", "false");
  } else {
    localStorage.setItem("night", "true");
  }
  turnNightMode();
})

function turnNightMode() {
  document.body.classList.toggle("night");
  // document.querySelector("footer .controls ul").classList.toggle("night");
  // document.querySelectorAll("#skills .skill").forEach(el => {
  //   el.classList.toggle("night")
  // });
}