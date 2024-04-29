import axios from "axios";
import "../../Pages/estilo/estoque.css"
import config from "../../config/config";
import Menu from "../../Componentes/Menu/Menu";
import React, { useState,useEffect } from "react";
import LogoConfig from "../../img/configuracao.png"
import AlertaErro from "../../Componentes/Alertas/Alerta";
import Alertasucesso from "../../Componentes/Alertas/Alerta";
function Configuracao(){
    const [diasmandaremail,setDiasmandarEmail]=useState(1);
    const [diasCobranca,setDiasCobraca] = useState(1) 
    const [emailsNotificacoes,setEmailsNotificacoes] =useState(1);
    const [alertVisible, setAlertVisible] = useState();
    const [alertaErro, setAlertaErro] = useState();
    const [mensagemError,setMensagemError] = useState()
    const [code,setCode]=useState('')
    useEffect(() => {
       setDiasCobraca(config.PERIODOCOBRANCA)
       setDiasmandarEmail(config.PERIODOENVIOEMAIL)
       setEmailsNotificacoes(config.EMAIL)
    }, []);

    function setarParametro(id,valor){
            axios.put(`${config.URL}configuracao/atualizarValorParametro/${id}/${valor}`).then((response)=>{
                if (response.status === 200) {
                    setCode(response.status)
                    setAlertVisible(true); 
                    setAlertaErro(false)
                    setTimeout(() => {
                      window.location.reload(); 
                    }, 1000);
                  }
            })  .catch((error)=>{
                setCode(error.response.status)
                setAlertaErro(true)
                setMensagemError("Ops ! Aconteceu algum erro interno")
            })
    }
    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
        <Menu/>
        <br></br>
        <div className="drawer-content">
            <section className="container mx-auto p-4 alinhamentoMenu2"> 
            {alertVisible && <Alertasucesso code={code}/>}
            {alertaErro && <AlertaErro code={code} />}
                <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoConfig}/>
                <h1 className="text-3xl font-bold">Configurações</h1>
            </section>
            <section className="container mx-auto p-4 shadow-xl">
                <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Definir frequencia de alerta estoque em dias:</span></div>
                        <input
                            type="text"
                            value={diasmandaremail}
                            onChange={(e) => setDiasmandarEmail(e.target.value)}
                            placeholder="Digite..."
                            className="input input-bordered input-success w-full max-w-xs"
                        />
                         <button className=" btn btn-success botoesAlterarParametros" onClick={()=>setarParametro(1,diasmandaremail)}>salvar</button>
                    </label>
                    <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Definir dias para pagamentos anotados:</span></div> 
                        <input
                            type="text"
                            value={diasCobranca}
                            onChange={(e) => setDiasCobraca(e.target.value)}
                            placeholder="Digite..."
                            className="input input-bordered input-success w-full max-w-xs"
                        />
                          <button className=" btn btn-success botoesAlterarParametros" onClick={()=>setarParametro(2,diasCobranca)}>salvar</button>
                    </label>
                    <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Definir email para notificações:</span></div> 
                        <input
                            type="text"
                            value={emailsNotificacoes}
                            onChange={(e) => setEmailsNotificacoes(e.target.value)}
                            placeholder="Digite..."
                            className="input input-bordered input-success w-full max-w-xs"
                        />
                          <button className=" btn btn-success botoesAlterarParametros"onClick={()=>setarParametro(3,emailsNotificacoes)} >salvar</button>
                    </label>
                    
            </section>
        </div>
    </main>
    )
}
export default Configuracao