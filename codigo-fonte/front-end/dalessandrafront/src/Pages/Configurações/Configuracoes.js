import React from "react";
import Menu from "../../Componentes/Menu/Menu";
import LogoConfig from "../../img/configuracao.png"
function Configuracao(){
    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
        <Menu/>
        <br></br>
        <div className="drawer-content">
            <section className="container mx-auto p-4 alinhamentoMenu2"> 
                <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoConfig}/>
                <h1 className="text-3xl font-bold">Configurações</h1>
            </section>
        </div>
    </main>
    )
}
export default Configuracao