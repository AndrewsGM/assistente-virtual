import { exibirResultado } from './services/displayService.js';

const dadosIniciais = {
    chat: { mensagem: "Reunião às 14hrs", fonte: "Google Chat", hora: 14, link: "https://meet.google.com/xyz-789" },
};

exibirResultado(dadosIniciais.chat);