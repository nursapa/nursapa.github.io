const snowConteiner = document.getElementById("root");

const random = (num) => {
  return Math.floor(Math.random() * num);
};

const colors = ["red", "green", "blue", "yellow", "pink"];

const getRandomStyles = () => {
  const top = random(100) + 10;
  const left = random(100) + 10;
  const dur = random(20) + 3;
  const size = random(25) + 25;
  const width = random(5) + 5;
  const background = random(5);

  return `top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
    width: ${width}px;
    height: ${width}px;
    background: ${colors[background]};
    border-radius: 50%;
    `;
};

const createSnows = (num) => {
  for (let i = num; i > 0; i--) {
    const snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML;
    snowConteiner.append(snow);
  }
  snow.remove();
};
