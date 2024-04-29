

import axios from 'axios';
import { useState } from 'react';
import config from '../../../config/config';
import AlertaErro from '../../Alertas/Alerta';
import Alertasucesso from '../../Alertas/Alerta';
import Confirme from'../../../img/confirme.png' 
function BaixaDevedor({id}){
   
    const[alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError,setMensagemError] = useState()
    const [code,setCode]=useState('')
    
    const [dados,setDados] = useState({
        metodoPagamento:"",
           
    })
    const capturarValores =(e)=>{
        const {name,value} = e.target
        setDados({
             ...dados,
            [name]:value
         })
    }
    
    function baixaPagamento(){
            axios.put(`${config.URL}devedores/updatePagamento/${id}/${dados.metodoPagamento}`)
            .then((response)=>{
                if (response.status === 200) {
                    setCode(response.status)
                    setAlertVisible(true); 
                    setAlertaErro(false)
                    setTimeout(() => {
                      setCode("")
                      setAlertVisible(false);
                      window.location.reload(); 
                    }, 1000);
                  }
            })
            .catch((error)=>{
                setCode(error.response.status)
                setAlertaErro(true)
                setMensagemError("Ops ! Aconteceu algum erro interno")
            })

    }
    return(
        <div>
          <button className="" onClick={()=>document.getElementById('my_modal_baixaDevedor'+id).showModal()}>Dar baixa</button>
         <dialog id={"my_modal_baixaDevedor"+id} className="modal">
                {alertVisible && <Alertasucesso code={code} />}
                {alertaErro && <AlertaErro code={code} />}
            <div className="modal-box w-11/12 max-w-5xl">
                <br></br>
                <h3 className="font-bold text-lg">Deseja prosseguir ?</h3>
                <br></br>
                <p>Para conitunar, selecione o metodo de acerto</p>
                <br></br>
                <select id="tipo" name="metodoPagamento" onChange={capturarValores}className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Metodo de Pagamento</option>
                                <option value="CC">CC - Cartão de Credito</option>
                                <option value="CD">CD - Cartão de Debito</option>
                                <option value="PIX">PIX</option>
                                <option value="Dinheiro">Dinheiro</option>
                </select>
                <div className="modal-action">
                    <button className=" btn btn-success" onClick={()=>baixaPagamento()}>Atualizar</button>
                    <form method="dialog">
                        <button className="btn" >Fechar</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
    )


} export default BaixaDevedor;