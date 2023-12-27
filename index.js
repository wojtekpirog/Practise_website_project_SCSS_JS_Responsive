const plusButton = document.querySelector("button:first-of-type");
const minusButton = document.querySelector("button:nth-of-type(2)");
const colorButton = document.querySelector("button:nth-of-type(3)");
const paragraph = document.querySelector("p");

const getFontSize = () => {
  const fontSize = window.getComputedStyle(paragraph).fontSize;
  return parseFloat(fontSize);
}

const getRandomHexColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

const zoomIn = () => {
  let fontSize = getFontSize();
  if (fontSize >= 40) return;
  fontSize += 2;
  paragraph.style.fontSize = fontSize + "px";
}

const zoomOut = () => {
  let fontSize = getFontSize();
  if (fontSize <= 10) return;
  fontSize -= 2;
  paragraph.style.fontSize = fontSize + "px";
}

const setRandomColor = () => paragraph.style.color = getRandomHexColor();

plusButton.addEventListener("click", zoomIn);
minusButton.addEventListener("click", zoomOut);
colorButton.addEventListener("click", setRandomColor);