// =========================
// PERGUNTAS
// =========================

const perguntas = [
    {
        pergunta: "1. Qual a primeira metadinha que a gente usou?",
        opcoes: ["Ruikasa", "Mizuena", "Mizisua", "Ivantill"],
        correta: 3
    },

    {
        pergunta: "2. Quantas vezes exatas eu sonhei com você.",
        opcoes: ["Quatro", "Duas", "Cinco", "Seis"],
        correta: 0
    },

    {
        pergunta: "3. O que faria eu me lembrar de você imediatamente.",
        opcoes: ["Yoshiki", "Chase Atlantic", "Pokémon", "Todas"],
        correta: 3
    },

    {
        pergunta: "4. Minha maior forma de demonstrar carinho/amor.",
        opcoes: ["Irittar", "'Eu te amo'", "Cartinhas", "Todas"],
        correta: 3
    },

    {
        pergunta: "5. Shipp mais sagrado pra mim (e que eu dediquei pra você)",
        opcoes: ["Ivantill", "Sasamiya", "Lapuh", "Kazuscara"],
        correta: 2
    },

    {
        pergunta: "6. Minha pelúcia favorita",
        opcoes: [
            "Cachorro com cara de tadinho",
            "Pocchaco",
            "Você",
            "Rampo cabeçudo"
        ],
        correta: 2
    },

    {
        pergunta: "7. Qual animal a gente provavelmente vai ter quando a gente for morar juntos?",
        opcoes: ["Coelho", "Gato", "Hamster", "Peixe gluglu"],
        correta: 1
    },

    {
        pergunta: "8. O shipp que eu mais dediquei pra você",
        opcoes: ["Ivantill", "Emunene", "Yoshikaru", "Mizuena"],
        correta: 2
    },

    {
        pergunta: "9. Primeira música que eu te dediquei",
        opcoes: [
            "Harvey - Her´s",
            "Something About You - Eyedress, Deny May",
            "Lucy~ - Corbon Amodio",
            "He's my Man - Luvcat"
        ],
        correta: 0
    },

    {
        pergunta: "10. Meus três personagens favoritos em ordem.",
        opcoes: [
            "Mizuki, Ivan, Tsukasa",
            "Ivan, Mizuki, Tsukasa",
            "Ivan, Chocola, Mizuki",
            "Chocola, Ivan, Mizuki"
        ],
        correta: 2
    }
];


// =========================
// VARIÁVEIS
// =========================

let perguntaAtual = 0;
let progresso = 0;


// =========================
// ELEMENTOS
// =========================

const perguntaElement = document.getElementById("pergunta");
const opcoesElement = document.getElementById("opcoes");
const progressElement = document.getElementById("progress");
const progressText = document.getElementById("progress-text");
const mensagemElement = document.getElementById("mensagem");
const continuarButton = document.getElementById("continuar");

const quizElement = document.getElementById("quiz");
const cartaElement = document.getElementById("carta");


// =========================
// MOSTRAR PERGUNTA
// =========================

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    perguntaElement.textContent = pergunta.pergunta;

    opcoesElement.innerHTML = "";

    mensagemElement.textContent = "";

    continuarButton.classList.add("hidden");


    pergunta.opcoes.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.type = "button";

        botao.className = "opcao";

        botao.textContent = opcao;

        botao.addEventListener("click", function () {
            verificarResposta(indice);
        });

        opcoesElement.appendChild(botao);
    });
}


// =========================
// VERIFICAR RESPOSTA
// =========================

function verificarResposta(indice) {

    const pergunta = perguntas[perguntaAtual];

    // Desativa as opções depois de clicar
    const botoes = document.querySelectorAll(".opcao");

    botoes.forEach(botao => {
        botao.disabled = true;
    });


    // =========================
    // ACERTOU
    // =========================

    if (indice === pergunta.correta) {

        progresso = (perguntaAtual + 1) * 10;

        progressElement.style.width = progresso + "%";
        progressText.textContent = progresso + "%";

        mensagemElement.textContent = "Acertou !";

        // Última pergunta
        if (perguntaAtual === perguntas.length - 1) {

            continuarButton.textContent = "Abrir Carta";

        } else {

            continuarButton.textContent = "Continuar";
        }

        continuarButton.classList.remove("hidden");

    }


    // =========================
    // ERROU
    // =========================

    else {

        mensagemElement.textContent = "Errou! Você terá que começar de novo 💔";

        setTimeout(function () {

            perguntaAtual = 0;
            progresso = 0;

            progressElement.style.width = "0%";
            progressText.textContent = "0%";

            mostrarPergunta();

        }, 1000);
    }
}


// =========================
// BOTÃO CONTINUAR
// =========================

continuarButton.addEventListener("click", function () {

    // Se estiver na última pergunta
    if (perguntaAtual === perguntas.length - 1) {

        abrirCarta();

    } else {

        // Vai para a próxima pergunta
        perguntaAtual++;

        mostrarPergunta();
    }
});


// =========================
// ABRIR CARTA
// =========================

function abrirCarta() {

    quizElement.classList.add("hidden");

    cartaElement.classList.remove("hidden");

    window.scrollTo(0, 0);
}


// =========================
// INICIAR QUIZ
// =========================

mostrarPergunta();