import React from 'react';
import { Tag } from 'primereact/tag';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import SubMenuEstoque from '../../SubMenu/subMenuEstoque';
import ModalExcluir from "../../Modal/ModiasEstoque/modalExcluir";
import{formatarParaReal} from "../../Utils/utils"

function Tabela({dados,filtro}){

    return (
        <DataTable value={dados} size={"large"}  tableStyle={{ minWidth: '70rem',justifyContent:"center", fontSize:'small'}}>
            <Column field="codProduto" header="Cod.Produto"/>
            <Column field="nomeProduto" header="Nome Produto"/>
            <Column field='marca' header='Marca'/>
            <Column field='cor' header='Cor'/>
            <Column field='tamanho' header='Tamanho'/>
            <Column field='tipo' header='Tipo'/>
            <Column field='qtdAtual' header='Qtd'/>
            <Column field='valorComprado' header='Valor de compra'body={(rowData)=>(<span>{formatarParaReal(rowData.valorComprado) }</span>)}/>
            <Column field='valorVenda' header='Valor de venda'body={(rowData)=>(<span>{formatarParaReal(rowData.valorVenda)}</span>)}/>
            <Column field='valorTotalEmEstoque' header='Valor de estoque'body={(rowData)=>(<span>{formatarParaReal(rowData.valorTotalEmEstoque)}</span>)}/>        
            <Column field="status" header="Status"
                body={(rowData) => {
                    if (rowData.status === 'bom' ||rowData.status === 'Bom' ) {
                        return <Tag severity="success" value={rowData.status}></Tag>;
                    } 
                    else if(rowData.status=="Em falta"){
                        return <Tag severity="danger" value={rowData.status}></Tag>;
                    }
                    else if(rowData.status=="Nivel Critico"){
                        return <Tag severity="warning" value={rowData.status}></Tag>;
                    }
                }}
            />
            <Column body={(rowData) => (<ModalExcluir id={rowData.codProduto}/>)} />
            <Column body={(rowData) => (<SubMenuEstoque id={rowData.codProduto}/>)} />
        </DataTable>
    )
}

export default Tabela;