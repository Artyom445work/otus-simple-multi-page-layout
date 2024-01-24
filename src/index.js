import "./styles/style.scss";
(function () {
  let width = 800;

  let list = document.querySelector(".slider__list");
  let listElems = document.querySelectorAll(".slider__item");

  let position = 0;

  document.querySelector(".slider__prev").onclick = function () {
    if (!position) {
      position = -width * (listElems.length - 1);
    } else {
      position += width;
      position = Math.min(position, 0);
    }
    list.style.marginLeft = position + "px";
  };

  document.querySelector(".slider__next").onclick = function () {
    if (position === -width * (listElems.length - 1)) {
      position = 0;
      list.style.marginLeft = "0px";
    } else {
      position -= width;
      position = Math.max(position, -width * (listElems.length - 1));
      list.style.marginLeft = position + "px";
    }
  };
})();
