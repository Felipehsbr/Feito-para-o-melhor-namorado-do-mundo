const textElement = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const floating = document.getElementById("floating");

let step = 0;
let typing = false;

const messages = [
  "Bem-vindo ao nosso pequeno universo.",
  "Cada coração que você viu aqui não é aleatório.",
  "Cada detalhe foi pensado em você.",
  "Agora, Santana, antes de tudo acabar, eu preciso que você leia isso com o coração aberto."
];

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 24 + 18 + "px";
  heart.style.animationDuration = Math.random() * 4 + 6 + "s";
  floating.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);

/* EFEITO DIGITAÇÃO */
function typeText(text, callback) {
  typing = true;
  textElement.innerText = "";
  let i = 0;

  const interval = setInterval(() => {
    textElement.innerText += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      typing = false;
      if (callback) callback();
    }
  }, 25);
}

nextBtn.addEventListener("click", () => {
  if (typing) return;

  step++;

  if (step < messages.length) {
    typeText(messages[step]);
  }

  else if (step === messages.length) {
    nextBtn.innerText = "Ler a carta";

    typeText(`
Santana,

Talvez você não perceba de imediato, mas tudo o que você acabou de viver aqui foi feito em silêncio.
Em noites pensando em você.
Em momentos em que o mundo estava barulhento demais, e você era o único pensamento que fazia sentido.

Eu não criei isso para impressionar.
Eu criei porque amar você transborda.
Porque às vezes o peito fica grande demais para guardar tudo, e eu precisei transformar sentimento em código, saudade em movimento, amor em algo que pudesse existir fora de mim.

Cada coração que apareceu representa um instante nosso.
Um olhar que confortou.
Uma conversa que salvou um dia difícil.
Um riso bobo que ficou na memória.
Nada aqui é exagero.
É só a forma mais honesta que encontrei de dizer que você mudou a minha vida.

Em 365 dias, você se tornou lar.
Se tornou segurança quando eu duvidei de mim.
Se tornou calma quando tudo parecia pesado.
Você me ensinou que amar não é ter medo.
É escolher ficar mesmo com o coração aberto.

Eu não prometo um caminho perfeito.
Prometo mãos dadas quando doer.
Prometo tentar todos os dias.
Prometo escolher você, mesmo quando o mundo for difícil, mesmo quando o futuro parecer incerto.
    `);
  }

  else if (step === messages.length + 1) {
    nextBtn.innerText = "💍";

    for (let i = 0; i < 100; i++) {
      setTimeout(createHeart, i * 60);
    }

    typeText(`
Depois de cada detalhe,
de cada sentimento,
de cada parte de mim que eu coloquei aqui...

Santana,
você aceita transformar esse nós em para sempre?
    `, showRing);
  }

  else {
    nextBtn.style.display = "none";
  }
});

function showRing() {
  const ring = document.createElement("div");
  ring.id = "ring";
  ring.innerText = "💍";
  document.body.appendChild(ring);
}

// texto inicial
typeText(messages[0]);
