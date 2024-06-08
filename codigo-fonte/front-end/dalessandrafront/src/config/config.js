
import axios from "axios";
import { Await } from "react-router-dom";
async function recuperarPeriodoDeCobranca() {
    try {
        const response = await axios.get('https://backdalessandra-production.up.railway.app/recuperandoParametroDiasCobranca');
        return response.data;
    } catch (error) {
        console.error('Erro ao recuperar o período de cobrança:', error);
        return null;
    }
}

async function recuperarPeriodoDeEnvioEmail() {
    try {
        const response = await axios.get('https://backdalessandra-production.up.railway.app/recuperandoParametroFrequenciaAvisoEstoque');
        return response.data;
    } catch (error) {
        console.error('Erro ao recuperar o período de cobrança:', error);
        return null;
    }
}
async function recuperandoEmail() {
    try {
        const response = await axios.get('https://backdalessandra-production.up.railway.app/configuracao/recuperarParametroEmail');
        return response.data;
    } catch (error) {
        console.error('Erro ao recuperar o período de cobrança:', error);
        return null;
    }
}
const config = {
    URL: 'https://backdalessandra-production.up.railway.app/',
    HEADERS : { 
        'accept': '*/*', 
        'Content-Type': 'application/json'
    },
    PERIODOCOBRANCA: await recuperarPeriodoDeCobranca(),
    PERIODOENVIOEMAIL: await recuperarPeriodoDeEnvioEmail(),
    EMAIL: await recuperandoEmail()
}

export default config;
