
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

const pageBody = document.body;

function updateBackgroundColor() {

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    pageBody.style.backgroundColor = rgbColor;
}


redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

updateBackgroundColor();
