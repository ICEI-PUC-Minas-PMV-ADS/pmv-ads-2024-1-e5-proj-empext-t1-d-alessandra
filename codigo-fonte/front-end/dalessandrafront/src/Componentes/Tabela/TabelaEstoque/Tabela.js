import React from 'react';
import SubMenuEstoque from '../../SubMenu/subMenuEstoque';
import ModalExcluir from "../../Modal/ModiasEstoque/modalExcluir";
import CardAlertaItemNaoEncontrado from '../../Card/CardAlertaItemNaoEncontrado';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function Tabela({dados,filtro}){
    const filtrarDados = (item) => {
        const codProduto = (item.codProduto || '').toString();
        const nomeProduto = (item.nomeProduto || '').toString();
        const marca = (item.marca || '').toString();
        const cor = (item.cor || '').toString();
        const tamanho = (item.tamanho || '').toString();
        const qtdAtual = (item.qtdAtual || '').toString();
        const valorComprado = (item.valorComprado || '').toString();
        const valorVenda = (item.valorVenda || '').toString();
        const status = (item.status || '').toString();
        const dataCadastro = (item.dataCadastro || '').toString();

        return (
            codProduto.toLowerCase().includes(filtro.toLowerCase()) ||
            nomeProduto.toLowerCase().includes(filtro.toLowerCase()) ||
            tamanho.toLowerCase().includes(filtro.toLowerCase()) ||
            status.toLowerCase().includes(filtro.toLowerCase()) 
        );
    };
    return (
        <DataTable value={dados} size={"large"}  tableStyle={{ minWidth: '70rem',justifyContent:"center", fontSize:'small'}}>
            <Column field="codProduto" header="Cod.Produto"/>
            <Column field="nomeProduto" header="Nome Produto"/>
            <Column field='marca' header='Marca'/>
            <Column field='cor' header='Cor'/>
            <Column field='tamanho' header='Tamanho'/>
            <Column field='tipo' header='Tipo'/>
            <Column field='qtdAtual' header='Qtd'/>
            <Column field='valorComprado' header='Valor de compra'body={(rowData)=>(<span>R$ {rowData.valorComprado}</span>)}/>
            <Column field='valorVenda' header='Valor de venda'body={(rowData)=>(<span>R$ {rowData.valorVenda}</span>)}/>
            <Column field='valorTotalEmEstoque' header='Valor de estoque'body={(rowData)=>(<span>R$ {rowData.valorTotalEmEstoque}</span>)}/>        
            <Column field="status" header="Status" />
            <Column body={(rowData) => (<ModalExcluir id={rowData.codProduto}/>)} />
            <Column body={(rowData) => (<SubMenuEstoque id={rowData.codProduto}/>)} />
        </DataTable>
    )
}

export default Tabela;