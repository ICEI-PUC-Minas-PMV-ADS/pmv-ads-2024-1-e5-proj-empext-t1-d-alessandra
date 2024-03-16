import axios from "axios";
import React, { useState } from "react";
import config from "../../../config/config";
import"../../../Pages/estilo/estoque.css";
import Alertasucesso from "../../Alertas/AlertaConfirmacao";
function ModalAdicionar(){

    const [nome,setNome] = useState()
    const [marca,setMarca] = useState()
    const [cor,setCor] = useState()
    const [tipo,setTipo] =useState()
    const [tamanho,setTamaho] =useState()
    const [qtd,setQtd] = useState()
    const [valorComprado,setValorComprado] =useState()
    const [valorVendido,setValorVendido] =useState()
    const [dataCadastro,setDataCadastro] = useState()

    const capturaNome = (event) => {setNome(event.target.value); }
    const capturaMarca = (event) => {setMarca(event.target.value); }
    const capturaCor = (event) => {setCor(event.target.value); }
    const capturaTipo = (event) => {setTipo(event.target.value); }
    const capturaTamanho = (event) => {setTamaho(event.target.value); }
    const capturaValorComprado = (event) => {setValorComprado(event.target.value); }
    const capturaValorVendido = (event) => {setValorVendido(event.target.value); }
    const capturaDataCadastro = (event) => {setDataCadastro(event.target.value); }
    const capturarQtd = (event) => {setQtd(event.target.value); }
    const [alertVisible, setAlertVisible] = useState(false);
    function salvar(){
        axios.post(
            config.URL+'estoque?nomeProduto='+nome+'&quantidadeItem='+qtd+'&marca='+marca+'&tipo='+tipo+'&cor='+cor+
            '&tamanho='+tamanho+'&valorComprado='+valorComprado+'&valorVenda='+valorVendido+'&dataCadastro='+new Date(dataCadastro).toLocaleDateString('pt-BR')+
            '&qtdAtual='+qtd
            )
            .then((response)=>{
                if (response.status === 200) {
                    setAlertVisible(true); 
                    setTimeout(() => {
                      setAlertVisible(false);
                      window.location.reload(); 
                    }, 1000);
                  }
              })
            .catch((error)=>{ 
                if(error.response.status === 400){
                    console.log("Erro ao adicionar item")
                }
            console.log(error)
           })
        }
    return (
        <div>
        <button className="btn btn-success" onClick={()=>document.getElementById('my_modal_20240310').showModal()} color={"#fff"}>Novo Registro</button>
        <dialog id="my_modal_20240310" className="modal">
            <div className="modal-box w-11/12 max-w-5xl alinharCamposModal">
            {alertVisible && <Alertasucesso message="Item adicionado com sucesso" />}
            <br></br>
                <h3 className="font-bold text-lg">Registro</h3>
                <p className="py-4">Adicionar novo item</p>
                <input id="nome"   type="text" placeholder="Nome" onChange={capturaNome} class="input input-bordered input-accent w-full max-w-xs" />
                <input id="marca" type="text" placeholder="Marca" onChange={capturaMarca}class="input input-bordered input-accent w-full max-w-xs" />
                <input id="cor" type="text" placeholder="Cor" onChange={capturaCor}class="input input-bordered input-accent w-full max-w-xs" />
                <select id="tipo" onChange={capturaTipo}className="select select-accent w-full max-w-xs">
                        <option disabled selected>Tipo</option>
                        <option value="Verão">Verão</option>
                        <option value="Inverno">Inverno</option>
                        <option value="Festa">Festa</option>
                        <option value="Formal">Formal</option>
                        <option value="Peça intima">Peça intima</option>
                </select>
                <select id="tamanhho" onChange={capturaTamanho}className="select select-accent w-full max-w-xs">
                        <option disabled selected>Tamanho</option>
                        <option value="P - Infantil">P - Infantil</option>
                        <option value="M - Infantil">M - Infantil</option>
                        <option value="G - Infantil">G - Infantil</option>
                        <option value="PP -Adulto">PP -Aduto</option>
                        <option value="P - Adulto">P - Aduto</option>
                        <option value="M - Adulto">M - Aduto</option>
                        <option value="G - Adulto">G - Aduto</option>
                        <option value="GG - Adulto">GG - Aduto</option>
                        <option value="EXG - Adulto">EXG - Adulto</option>
                        <option value="36 - Adulto">36 - Adulto</option>
                        <option value="38 - Adulto">38 - Adulto</option>
                        <option value="40 - Adulto">40 - Adulto</option>
                        <option value="42 - Adulto">42 - Adulto</option>
                        <option value="46 - Adulto">46 - Adulto</option>
                </select>
               
                <input id="qtd" type="text" onChange={capturarQtd} placeholder="Quantidade" class="input input-bordered input-accent w-full max-w-xs" />
                <input id="valorcomprado" type="text" onChange={capturaValorComprado}  placeholder="Valor Comprado" class="input input-bordered input-accent w-full max-w-xs" />
                <input id="valorvendido" type="text" onChange={capturaValorVendido}placeholder="Valor Vendido" class="input input-bordered input-accent w-full max-w-xs" />
                <input id="datacadastro" type="date" onChange={capturaDataCadastro} placeholder="Data Cadastro" class="input input-bordered input-accent w-full max-w-xs" />
                <div className="modal-action">
              
                    <button className=" btn btn-success" onClick={()=>salvar()}>Adicionar</button>
                <form method="dialog">
                    <button className="btn">Fechar</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    )
}
export default ModalAdicionar;