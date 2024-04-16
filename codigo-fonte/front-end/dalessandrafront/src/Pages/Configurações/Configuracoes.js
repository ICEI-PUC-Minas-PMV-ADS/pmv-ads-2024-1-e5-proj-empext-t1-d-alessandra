import React, { useState,useEffect } from "react";
import "../../Pages/estilo/estoque.css"
import Menu from "../../Componentes/Menu/Menu";
import LogoConfig from "../../img/configuracao.png"
import config from "../../config/config";
import axios from "axios";
function Configuracao(){
    const [diasmandaremail,setDiasmandarEmail]=useState(1);
    const [diasCobranca,setDiasCobraca] = useState(1) 
    const [emailsNotificacoes,setEmailsNotificacoes] =useState(1);
    useEffect(() => {
       setDiasCobraca(config.PERIODOCOBRANCA)
       setDiasmandarEmail(config.PERIODOENVIOEMAIL)
       setEmailsNotificacoes(config.EMAIL)
    }, []);

    function setarParametro(id,valor){
            axios.put(`${config.URL}configuracao/atualizarValorParametro/${id}/${valor}`).then((response)=>{
                if (response.status === 200) {
                    setTimeout(() => {
                      window.location.reload(); 
                    }, 1000);
                  }
            })  .catch((error)=>{
                console.log(error)
            })
    }
    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
        <Menu/>
        <br></br>
        <div className="drawer-content">
            <section className="container mx-auto p-4 alinhamentoMenu2"> 
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
    
            </section>
        </div>
    </main>
    )
}
export default Configuracao