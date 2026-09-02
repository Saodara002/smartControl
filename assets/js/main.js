const nomeCompleto = document.getElementById("nomeCompleto");
const dataAtual = document.getElementById("dataAtual");

if (nomeCompleto || dataAtual) {
    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");

    if (!nome || nome.trim() === "") {
        nome = "Usuário";
    }

    if (!sobrenome || sobrenome.trim() === "") {
        sobrenome = "";
    }

    const usuario = `${nome} ${sobrenome}`.trim();

    const agora = new Date();

    const dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    const diaSemana = dias[agora.getDay()];
    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();
    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");

    const fusoMinutos = -agora.getTimezoneOffset();
    const sinal = fusoMinutos >= 0 ? "+" : "-";
    const fusoHoras = String(Math.floor(Math.abs(fusoMinutos) / 60)).padStart(2, "0");
    const fuso = `${sinal}${fusoHoras}:00`;

    const saudacao = `Olá, ${usuario}!`;
    const dataFormatada = `${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto} (${fuso})`;

    if (nomeCompleto) {
        nomeCompleto.textContent = saudacao;
    }

    if (dataAtual) {
        dataAtual.textContent = dataFormatada;
    }

    console.log(`${saudacao} Hoje é ${dataFormatada}`);
}
const loginForm = document.querySelector('form.container');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        window.location.href = 'dashboard.html';
    });
}

// pesquisa de usuários
const campoPesquisa = document.querySelector("#campoPesquisa");
const linhasTabela = document.querySelectorAll(".relatorio-card tbody tr");

if (campoPesquisa && linhasTabela.length) {
    campoPesquisa.addEventListener("input", function () {
        const textoPesquisa = campoPesquisa.value.trim().toLowerCase();

        linhasTabela.forEach(function (linha) {
            const nome = linha.querySelector("td")?.textContent.toLowerCase() || "";
            const deveMostrar = !textoPesquisa || nome.includes(textoPesquisa);

            linha.classList.toggle("linha-escondida", !deveMostrar);
        });
    });
}

// isguro
const botaoTema = document.querySelector("#botaoTema");

if (botaoTema) {
    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            botaoTema.innerHTML = `<i class="fa-light fa-sun"></i>
                Light Mode`;

        } else {

            botaoTema.innerHTML = `<i class="fa-light fa-moon"></i>
                Dark Mode`;
        }
    });
}