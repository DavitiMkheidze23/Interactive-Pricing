let cost = document.getElementById("cost")
let slider = document.getElementById("price-slider");
let toggle = document.getElementById("billing");
let view = document.getElementById("pageView");
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let saleSwitch = document.getElementById("billing")
let toggleSlider = document.querySelector(".toggle-slider")
let sale = false;

slider.addEventListener("input", function () {
    view.innerHTML = pageViews[slider.value];
    cost.innerHTML = perMonth[slider.value];
    let value = this.value * 25;

  this.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${value}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
            saleFunction();
}
);
let backgroundBlue = false
toggle.addEventListener("change", function () {
    if (sale == false) {
      sale = true;
    } else {
      sale = false;
    }
    toggleSlider.style.backgroundColor = "#7AEADF";
    saleFunction();
    backgroundBlue = !backgroundBlue
    if (backgroundBlue == false){
        toggleSlider.style.backgroundColor = "#CFD8EF";
    }
  });

function saleFunction(){
    if (sale){
    cost.innerHTML = perMonth[slider.value] * 0.75;
  } else {
    cost.innerHTML = perMonth[slider.value];
    }
}