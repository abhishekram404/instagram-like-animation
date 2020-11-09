window.onload = () => {
  var img = document.querySelector("#image");
  var heart_cont = document.querySelector(".heart-cont");
  img.addEventListener("dblclick", () => {
    heart_cont.classList.add("animate");
  });
  heart_cont.addEventListener("animationend", () => {
    heart_cont.classList.remove("animate");
  });
};
