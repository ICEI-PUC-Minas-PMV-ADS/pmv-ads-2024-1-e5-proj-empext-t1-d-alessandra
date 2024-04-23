import axios from "axios";
import "../../Pages/estilo/estoque.css"
import config from "../../config/config";
import Menu from "../../Componentes/Menu/Menu";
import React, { useState,useEffect } from "react";
import LogoConfig from "../../img/configuracao.png"
import AlertaErro from "../../Componentes/Alertas/AlertaErro";
import Alertasucesso from "../../Componentes/Alertas/AlertaSucesso";
function Configuracao(){
    const [diasmandaremail,setDiasmandarEmail]=useState(1);
    const [diasCobranca,setDiasCobraca] = useState(1) 
    const [emailsNotificacoes,setEmailsNotificacoes] =useState(1);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError,setMensagemError] = useState()
    useEffect(() => {
       setDiasCobraca(config.PERIODOCOBRANCA)
       setDiasmandarEmail(config.PERIODOENVIOEMAIL)
       setEmailsNotificacoes(config.EMAIL)
    }, []);

    function setarParametro(id,valor){
            axios.put(`${config.URL}configuracao/atualizarValorParametro/${id}/${valor}`).then((response)=>{
                if (response.status === 200) {
                    setAlertVisible(true); 
                    setAlertaErro(false)
                    setTimeout(() => {
                      window.location.reload(); 
                    }, 1000);
                  }
            })  .catch((error)=>{
                console.log(error)
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
            {alertVisible && <Alertasucesso message="Item adicionado com sucesso" />}
            {alertaErro && <AlertaErro message={mensagemError} />}
                <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoConfig}/>
                <h1 className="text-3xl font-bold">Configurações</h1>
            </section>
            <section className="container mx-auto p-4 shadow-xl">
                <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Frequencia em dias para envio de notificações do estoque:</span></div>
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
                        <div class="label"><span class="label-text">Frequencia dias para cobrança</span></div> 
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
                        <div class="label"><span class="label-text">Email para notificações:</span></div> 
                        <input
                            type="text"
                            value={emailsNotificacoes}
                            onChange={(e) => setEmailsNotificacoes(e.target.value)}
                            placeholder="Digite..."
                            className="input input-bordered input-success w-full max-w-xs"
                        />
                          <button className=" btn btn-success botoesAlterarParametros"onClick={()=>setarParametro(3,emailsNotificacoes)} >salvar</button>
                    </label>
                    <label className="swap swap-rotate">
                        <input type="checkbox" className="theme-controller" value="" /> 
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>            
                    </label>
            </section>
        </div>
    </main>
    )
}
export default Configuracao