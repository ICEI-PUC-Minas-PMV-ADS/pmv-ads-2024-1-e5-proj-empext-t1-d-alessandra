
import axios from "axios";
import { Await } from "react-router-dom";
async function recuperarPeriodoDeCobranca() {
    try {
        const response = await axios.get('http://localhost:8080/configuracao/recuperandoParametroDiasCobranca');
        return response.data;
    } catch (error) {
        console.error('Erro ao recuperar o período de cobrança:', error);
        return null;
    }
}

async function recuperarPeriodoDeEnvioEmail() {
    try {
        const response = await axios.get('http://localhost:8080/configuracao/recuperandoParametroFrequenciaAvisoEstoque');
        return response.data;
    } catch (error) {
        console.error('Erro ao recuperar o período de cobrança:', error);
        return null;
    }
}
async function recuperandoEmail() {
    try {
        const response = await axios.get('http://localhost:8080/configuracao/recuperarParametroEmail');
        return response.data;
    } catch (error) {
        console.error('Erro ao recuperar o período de cobrança:', error);
        return null;
    }
}
const config = {
    URL: 'http://localhost:8080/',
    HEADERS : { 
        'accept': '*/*', 
        'Content-Type': 'application/json'
    },
    PERIODOCOBRANCA: await recuperarPeriodoDeCobranca(),
    PERIODOENVIOEMAIL: await recuperarPeriodoDeEnvioEmail(),
    EMAIL: await recuperandoEmail()
}

export default config;