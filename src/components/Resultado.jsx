import { formatarTexto } from '../services/displayService';

/**
 * Componente para exibir um item do Google Workspace
 * @param {Object} item - Dados do item (chat, drive, calendar)
 */
function Resultado({ item }) {
    return (
        <p
            dangerouslySetInnerHTML={{
                __html: formatarTexto(item),
            }}
        />
    );
}

export default Resultado;