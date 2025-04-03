export function exibirResultado(dados) {
    const elementoResultado = document.getElementById('resultado');
    if(!elementoResultado) {
        throw new Error('Elemento #resultado não encontrado no DOM');
    }

    const temDados = !!dados;
    if (temDados) {
        const texto = `${dados.mensagem} - Fonte: ${dados.fonte} - Hora: ${dados.hora}hrs`;
        elementoResultado.innetHTML = `${texto} <a href="${dados.link}" target="_blank" rel="noopener noreferrer">Entrar</a>`;
    } else {
        elementoResultado.textContent = 'Nenhum resultado encontrado.';
    }
}