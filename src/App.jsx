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
    const [termoBusca, setTermoBusca] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simula busca (futuramente será uma chamada à API)
        const resultadosFiltrados = dadosIniciais.filter((item) =>
            Object.values(item).some(
                (val) =>
                    typeof val === 'string' &&
                    val.toLowerCase().includes(termoBusca.toLowerCase())
            )
        );
        setResultados(resultadosFiltrados);
    };

    return (
        <div className="container mt-5">
            <header className="mb-4">
                <h1 className="text-center">Assistente Virtual</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite sua busca (ex.: Reunião, Relatório)"
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">
                            Buscar
                        </button>
                    </div>
                </form>
                <section aria-live="polite">
                    {resultados.length > 0 ? (
                        <ul className="list-group">
                            {resultados.map((item, index) => (
                                <li key={index} className="list-group-item">
                                    <Resultado item={item} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="alert alert-warning" role="alert">
                            Nenhum resultado encontrado.
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;