import axios from "axios";
import React, { useState } from "react";
import dayjs from "dayjs";
import"../../../Pages/estilo/estoque.css";
import config from "../../../config/config";
import AlertaErro from "../../Alertas/Alerta"
import Alertasucesso from "../../Alertas/Alerta";
function ModalAdicionar(){

    const [dados,setDados] = useState({
        nome:"",
        marca:" ",
        cor:"",
        tipo:"",
        tamanho:"",
        qtd:"",
        valorComprado:"",
        valorVendido:"",
        dataCadastro:"",    
    })
    
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError,setMensagemError] = useState()
    const [code,setCode] = useState('')
    const capturarValores =(e)=>{
        const {name,value} = e.target
        setDados({
             ...dados,
            [name]:value
         })
    }

    function salvar(){
        const valorCompradoFormatado = dados.valorComprado.includes(',') ? dados.valorComprado.replace(',', '.') : dados.valorComprado
        const valorVendaFormatado = dados.valorVendido.includes(',') ? dados.valorVendido.replace(',', '.') : dados.valorVendido
        const headers = config.HEADERS
        const data = {
            "nomeProduto": dados.nome+' '+dados.tamanho+' '+dados.marca+' '+dados.cor,
            "quantidadeItem": dados.qtd,
            "marca":dados.marca,
            "tipo":dados.tipo,
            "cor": dados.cor,
            "tamanho":dados.tamanho,
            "valorComprado":valorCompradoFormatado,
            "valorVenda": valorVendaFormatado,
            "dataCadastro": dayjs(dados.dataCadastro).format("DD/MM/YYYY"),
            "qtdAtual": dados.qtd,
        }
        
        axios.post(config.URL+'estoque',data,{ headers })
            .then((response)=>{
                if (response.status === 200 && response.data!=="Produto já Cadastrado") {
                    setAlertVisible(true); 
                    //setAlertaErro(false)
                    setCode(response.status)
                    setTimeout(() => {
                      setAlertVisible(false);
                      setCode('')
                      window.location.reload(); 
                    }, 1000);
                  }
              })
            .catch((error)=>{ 
                setAlertVisible(true)
                console.log(error)
                //if(error.response.status === 400){
                  // setCode(error.response.status)
                   //setMensagemError("Erro: "+error.response.status+". Verifique se todos os campos estão digitados de maneira correta")
                   //setAlertaErro(true)
                   //setAlertaErro(false)
                //}
                //else{
                  //  console.log(error)
                    //setCode(error.response.status)
                    //setAlertaErro(true)
                    //setMensagemError("Ops ! Aconteceu algum erro interno")
                // }
           })    
        }
    return (
        <div>
        <button className="btn btn-success" onClick={()=>document.getElementById('my_modal_20240310').showModal()} color={"#fff"}>Novo Registro</button>
        <dialog id="my_modal_20240310" className="modal">
                {alertVisible && <Alertasucesso code={code} />}
               
            <div className="modal-box w-11/12 max-w-5xl alinharCamposModal">
                <br></br>
                <h3 className="font-bold text-lg">Registro</h3>
                <p className="py-4">Adicionar novo item</p>
                <section className="alinhamento">
                    <input id="nome"   type="text" placeholder="Nome" name ="nome"onChange={capturarValores} class="input input-bordered input-success w-full max-w-xs" />
                    <input id="marca" type="text" placeholder="Marca"name="marca" onChange={capturarValores}class="input input-bordered input-success w-full max-w-xs" />
                    <input id="cor" type="text" placeholder="Cor" name="cor" onChange={capturarValores}class="input input-bordered input-success w-full max-w-xs" />
                    <input id="qtd" name="qtd" type="text" onChange={capturarValores} placeholder="Quantidade" class="input input-bordered input-success w-full max-w-xs" />
                    <input id="valorcomprado" name="valorComprado" type="text" onChange={capturarValores}  placeholder="Valor Comprado" class="input input-bordered input-success w-full max-w-xs" />
                    <input id="valorvendido" name="valorVendido" type="text" onChange={capturarValores}placeholder="Valor Vendido" class="input input-bordered input-success w-full max-w-xs" />
                    <input id="datacadastro" name="dataCadastro" type="date" onChange={capturarValores} placeholder="Data Cadastro" class="input input-bordered input-success w-full max-w-xs" />
                    <select id="tipo" name="tipo" onChange={capturarValores}className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Tipo</option>
                            <option value="Verão">Verão</option>
                            <option value="Inverno">Inverno</option>
                            <option value="Festa">Festa</option>
                            <option value="Formal">Formal</option>
                            <option value="Peça intima">Peça intima</option>
                    </select>
                    <select id="tamanhho" name="tamanho" onChange={capturarValores}className="select select-bordered w-full max-w-xs">
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
               
                </section>
                <div className="modal-action">
                    <button className=" btn btn-success" onClick={()=>salvar()}>Adicionar</button>
                <form method="dialog">
                    <button className="btn" onClick={()=>setAlertaErro(false)}>Fechar</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    )
}
export default ModalAdicionar;