const spadeTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const spadeTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const spade1 = document.querySelector("#spade1");
const spade2 = document.querySelector("#spade2");
const spade3 = document.querySelector("#spade3");

// codez ici

// Promesse avec callback hell
function promesseCallbackHell() {
  spade1.animate(spadeTumbling, spadeTiming).finished.then(() => {
    spade2.animate(spadeTumbling, spadeTiming).finished.then(() => {
      spade3.animate(spadeTumbling, spadeTiming);
    });
  });
}

// Promesse en chaine
function promesseChain() {
  spade1
    .animate(spadeTumbling, spadeTiming).finished
    .then(() => spade2.animate(spadeTumbling, spadeTiming).finished)
    .then(() => spade3.animate(spadeTumbling, spadeTiming).finished);
}

//Function Asynchrone
async function asynchrone() {
  await spade1.animate(spadeTumbling, spadeTiming).finished;
  await spade2.animate(spadeTumbling, spadeTiming).finished;
  await spade3.animate(spadeTumbling, spadeTiming).finished;
}

// promesseCallbackHell();
promesseChain();
// asynchrone();
