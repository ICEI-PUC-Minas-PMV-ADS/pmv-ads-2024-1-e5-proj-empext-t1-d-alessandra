import axios from "axios";
import React from "react";
import config from "../../config/config";
function ModalAdicionar(){
    async function salvar(){
         const nome = document.querySelector('#nome').value
         const marca = document.querySelector('#marca').value
         const cor = document.querySelector('#cor').value
         const tipo =document.querySelector('#tipo').value
         const tamanho =document.querySelector('#tamanhho').value
         const qtd = document.querySelector('#qtd').value
         const valorComprado =document.querySelector('#valorcomprado').value
         const valorVendido =document.querySelector('#valorvendido').value
         const dataCadastro = document.querySelector('#datacadastro').value
        
        const data = {
            "nomeProduto": nome,
            "quantidadeItem": parseInt(qtd),
            "marca": marca,
            "tipo": tipo,
            "cor": cor,
            "tamanho": tamanho,
            "valorComprado": parseFloat(valorComprado),
            "valorVenda": parseFloat(valorVendido),
            "dataCadastro": new Date(dataCadastro).toLocaleDateString('pt-BR')
        }


        const headers ={
            "Content-Type":"application/json"
        }
        axios.post(config.URL+'estoque',data,{headers})
          .then((response) => {
            console.log(data)
            console.log(response.data)
            })
        .catch((error) => {
                console.log(error)
            })
        
    }
    return (
        <div>
        <button className="btn btn-success" onClick={()=>document.getElementById('my_modal_1').showModal()}>Novo Registro</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Registro</h3>
                <p className="py-4">Adicionar novo item</p>
                <input id="nome"   type="text" placeholder="Nome" class="input input-bordered input-accent w-full max-w-xs" />
                <input id="marca" type="text" placeholder="Marca" class="input input-bordered input-accent w-full max-w-xs" />
                <input id="cor" type="text" placeholder="Cor" class="input input-bordered input-accent w-full max-w-xs" />
                <select id="tipo" className="select select-accent w-full max-w-xs">
                        <option disabled selected>Tipo</option>
                        <option value="Verão">Verão</option>
                        <option value="Inverno">Inverno</option>
                        <option value="Festa">Festa</option>
                        <option value="Formal">Formal</option>
                        <option value="Peça intima">Peça intima</option>
                </select>
                <select id="tamanhho" className="select select-accent w-full max-w-xs">
                        <option disabled selected>Tamanho</option>
                        <option value="P - Infantil">P - Infantil</option>
                        <option value="M - Infantil">M - Infantil</option>
                        <option value="G - Infantil">G - Infantil</option>
                        <option value="PP -Aduto">PP -Aduto</option>
                        <option value="P - Aduto">P - Aduto</option>
                        <option value="M - Aduto">M - Aduto</option>
                        <option value="G - Aduto">G - Aduto</option>
                        <option value="GG - Aduto">GG - Aduto</option>
                        <option value="EXG - Adulto">EXG - Adulto</option>
                        <option value="36 - Adulto">36 - Adulto</option>
                        <option value="38 - Adulto">38 - Adulto</option>
                        <option value="40 - Adulto">40 - Adulto</option>
                        <option value="42 - Adulto">42 - Adulto</option>
                        <option value="46 - Adulto">46 - Adulto</option>
                </select>
               
                <input id="qtd" type="text" placeholder="Quantidade" class="input input-bordered input-accent w-full max-w-xs" />
                <input id="valorcomprado" type="text" placeholder="Valor Comprado" class="input input-bordered input-accent w-full max-w-xs" />
                <input id="valorvendido" type="text" placeholder="Valor Vendido" class="input input-bordered input-accent w-full max-w-xs" />
                <input id="datacadastro" type="date"placeholder="Data Cadastro" class="input input-bordered input-accent w-full max-w-xs" />
                <div className="modal-action">
                <form method="dialog">
                    <button className=" btn btn-success" onClick={()=>salvar()}>Adicionar</button>
                    <button className="btn">Fechar</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    )
}
export default ModalAdicionar;