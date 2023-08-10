const latinhas = ["Coca-Cola", "Sprite"];

latinhas.push("Fanta");

const latinhasNaoSprite = latinhas.filter((latinha) => latinha !== "Sprite");

const latinhaFanta = latinhas.find((latinha) => latinha === "Fanta");

const found = latinhas.includes("Fanta", 1);

const novasLatinhas = [...latinhas, "Pepsi"];

const latinhasAtualizdas = novasLatinhas.slice(-2);

latinhas.pop();

const fruits = ["🍎", "🍇"];

const apples = fruits.map((fruit) => "🍎");

const fruitsReverse = fruits.reverse();

fruits.forEach((fruit) => {
  console.log(fruit);
});
