const background = document.querySelector(".background");
const hexColor = document.querySelector(".hex-color");
const luminosity = document.querySelector(".luminosity");
const newHexColor = document.querySelector(".new-hex-color");

function handleChangeColor(hex) {
  if (hex.length !== 4 && hex.length !== 7) {
    console.log("Houve um erro: Invalid HEX");
  }

  try {
    const newHexColorValue = lumiance(hex, parseFloat(luminosity.value));

    background.style.backgroundColor = newHexColorValue;
    newHexColor.value = newHexColorValue;
  } catch (e) {
    console.log("Houve um erro: " + e.message);
  }
}

function handleChangeLuminosity(luminosity) {
  if (hexColor.value.length !== 4 && hexColor.value.length !== 7) {
    console.log("Houve um erro: Invalid HEX");
  }

  try {
    const newHexColorValue = lumiance(hexColor.value, parseFloat(luminosity));

    background.style.backgroundColor = newHexColorValue;
    newHexColor.value = newHexColorValue;
  } catch (e) {
    console.log("Houve um erro: " + e.message);
  }
}

// lógica para converter o hex em uma cor mais clara
// ou mais escura
function lumiance(hex, luminosity = 0) {
  // hexadecimal é um valor que vai de 0 até f
  // contém 16 dígitos
  // 0 = black
  // f = white

  // eu aceito hex decimal com 3 ou 6 dígitos
  hex = hex.replace(/[^0-9a-f]/gi, "");

  const isValidHex = hex.length === 6 || hex.length === 3;
  if (!isValidHex) throw new Error("Invalid HEX");

  // se for 3 dígitos, transformar para 6 dígitos
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // aplicar uma fórmula matemática para aumentar ou
  // diminuir a luminosidade de um hex

  // precisa transformar o hex em rgb
  // r (red) / g (green) / b (blue)
  const black = 0;
  const white = 255;

  const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi);

  let newHex = "#";

  for (let twoDigit of twoDigitGroup) {
    const numberFromHex = parseInt(twoDigit, 16);
    const calculateLuminosity = numberFromHex + luminosity * 255;
    const blackOrLuminosity = Math.max(black, calculateLuminosity);
    const partialColor = Math.min(white, blackOrLuminosity);

    const newColor = Math.round(partialColor);

    const numberToHex = newColor.toString(16);
    const finalNumber = `0${numberToHex}`.slice(-2);

    newHex = newHex + finalNumber;
  }

  return newHex;
}
