const elementoNome = document.querySelector('#nomeCompleto');
const elementoData = document.querySelector('#dataAtual');

const obterNomeUsuario = () => {
    const nome = prompt('Digite seu nome:');
    const sobrenome = prompt('Digite seu sobrenome:');

    const nomeLimpo = (nome || '').trim();
    const sobrenomeLimpo = (sobrenome || '').trim();

    if (!nomeLimpo && !sobrenomeLimpo) {
        return 'Usuário';
    }

    return `${nomeLimpo || 'Usuário'} ${sobrenomeLimpo || ''}`.trim();
};

const formatarFusoHorario = (offsetMinutos) => {
    const sinal = offsetMinutos > 0 ? '-' : '+';
    const totalMinutos = Math.abs(offsetMinutos);
    const horas = String(Math.floor(totalMinutos / 60)).padStart(2, '0');
    const minutos = String(totalMinutos % 60).padStart(2, '0');

    return `${sinal}${horas}:${minutos}`;
};

const formatarDataAtual = () => {
    const agora = new Date();

    const diasSemana = [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado'
    ];

    const diaSemana = diasSemana[agora.getDay()]
        .split('-')
        .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1))
        .join('-');

    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');
    const fusoHorario = formatarFusoHorario(agora.getTimezoneOffset());

    return `${diaSemana}, ${dia}/${mes}/${ano} – ${hora}:${minuto} (${fusoHorario})`;
};

const atualizarSaudacao = () => {
    if (!elementoNome || !elementoData) {
        return;
    }

    const usuario = obterNomeUsuario();
    const dataAtual = formatarDataAtual();

    elementoNome.textContent = `Olá, ${usuario}!`;
    elementoData.textContent = `Hoje é ${dataAtual}`;
};

document.addEventListener('DOMContentLoaded', () => {
    atualizarSaudacao();
    const intervalo = setInterval(atualizarSaudacao, 60000);

    window.addEventListener('beforeunload', () => {
        clearInterval(intervalo);
    });
});