const perguntas = [
  {
    pergunta: "Qual dessas ações ajuda a preservar o meio ambiente?",
    respostas: ["Jogar lixo no rio", "Plantar árvores", "Queimar lixo"],
    correta: 1
  },
  {
    pergunta: "O que é uma alimentação saudável?",
    respostas: ["Comer muitos doces", "Beber refrigerante", "Comer frutas e verduras"],
    correta: 2
  },
  {
    pergunta: "Como podemos economizar água?",
    respostas: ["Deixando a torneira aberta", "Tomando banhos longos", "Fechando a torneira ao escovar os dentes"],
    correta: 2
  }
];

let indice = 0;
let pontos = 0;

function mostrarPergunta() {
  if (indice < perguntas.length) {
    const q = perguntas[indice];
    document.getElementById("question").textContent = q.pergunta;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    q.respostas.forEach((resposta, i) => {
      const btn = document.createElement("button");
      btn.textContent = resposta;
      btn.onclick = () => verificarResposta(i);
      answersDiv.appendChild(btn);
    });
  } else {
    document.getElementById("quiz").innerHTML = `<h2>Você acertou ${pontos} de ${perguntas.length} perguntas!</h2>`;
  }
}

function verificarResposta(respostaSelecionada) {
  if (respostaSelecionada === perguntas[indice].correta) {
    pontos++;
    document.getElementById("result").textContent = "✅ Resposta correta!";
  } else {
    document.getElementById("result").textContent = "❌ Resposta errada!";
  }
  indice++;
  setTimeout(() => {
    document.getElementById("result").textContent = "";
    mostrarPergunta();
  }, 1000);
}

mostrarPergunta();
