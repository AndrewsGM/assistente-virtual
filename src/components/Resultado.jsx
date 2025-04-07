import PropTypes from 'prop-types';
import { formatarTexto } from '../services/displayService';

/**
 * Componente para exibir um item do Google Workspace
 * @param {Object} item - Dados do item (chat, drive, calendar)
 */
function Resultado({ item }) {
    return (
        <p
            className="mb-0"
            dangerouslySetInnerHTML={{
                __html: formatarTexto(item),
            }}
        />
    );
}

// Validação de props
Resultado.propTypes = {
    item: PropTypes.shape({
        tipo: PropTypes.string.isRequired,
        mensagem: PropTypes.string,
        fonte: PropTypes.string.isRequired,
        hora: PropTypes.number,
        link: PropTypes.string,
        nome: PropTypes.string,
        evento: PropTypes.string,
    }).isRequired,
};

export default Resultado;