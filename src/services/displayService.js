/**
 * Formata o texto com base no tipo de dado
 * @param {Object} item - Item do Google Workspace
 * @returns {string} Texto formatado com link, se aplicável
 */
export function formatarTexto(item) {
    switch (item.tipo) {
        case 'chat':
            return `${item.mensagem} - Fonte: ${item.fonte} - Hora: ${item.hora}h <a href="${item.link}" target="_blank" rel="noopener noreferrer">Entrar</a>`;
        case 'drive':
            return `Arquivo: ${item.nome} - Fonte: ${item.fonte} <a href="${item.link}" target="_blank" rel="noopener noreferrer">Abrir</a>`;
        case 'calendar':
            return `${item.evento} - Fonte: ${item.fonte} - Hora: ${item.hora}h`;
        default:
            throw new Error(`Tipo de dado desconhecido: ${item.tipo}`);
    }
}