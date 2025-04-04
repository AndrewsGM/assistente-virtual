import { useState } from 'react';
import Resultado from './components/Resultado';

const dadosIniciais = [
    {
        tipo: 'chat',
        mensagem: 'Reunião às 14h no Google Meet',
        fonte: 'Google Chat',
        hora: 14,
        link: 'https://meet.google.com/xyz-789',
    },
    {
        tipo: 'drive',
        nome: 'Relatorio_2025.pdf',
        fonte: 'Google Drive',
        link: 'https://drive.google.com/file/abc-123',
    },
    {
        tipo: 'calendar',
        evento: 'Planejamento Semanal',
        fonte: 'Google Calendar',
        hora: 16,
    },
];

function App() {
    const [resultados, setResultados] = useState(dadosIniciais);

    return (
        <div className="app">
            <header>
                <h1>Assistente Virtual</h1>
            </header>
            <main>
                <section aria-live="polite">
                    {resultados.length > 0 ? (
                        resultados.map((item, index) => (
                            <Resultado key={index} item={item} />
                        ))
                    ) : (
                        <p>Nenhum resultado encontrado.</p>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;