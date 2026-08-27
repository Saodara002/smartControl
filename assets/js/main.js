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