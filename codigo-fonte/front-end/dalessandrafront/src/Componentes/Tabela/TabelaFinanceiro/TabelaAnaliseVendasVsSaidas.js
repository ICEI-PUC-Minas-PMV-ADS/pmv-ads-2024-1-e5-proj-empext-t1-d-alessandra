import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { formatarParaReal } from '../../Utils/utils';
function TabelaAnaliseVendasVsSaidas ({dados}){
    return (
        <DataTable value={dados} size={"large"}  tableStyle={{ minWidth: '70rem',justifyContent:"center", fontSize:'small'}}>
            <Column field='mesAno' header='Mês'/*body={(rowData)=>(<span>{formatarParaReal(rowData.valorComprado) }</span>)}*//>
            <Column field="entrada" header="Entrada" 
            body={
                (rowData)=>{
                    if(rowData.entrada!==null){
                        return <span>{formatarParaReal(rowData.entrada) }</span>
                    }
                    else{
                        return <span>0</span>
                    }
                }
            }/>
            <Column field="saida" header="Saida"
                body={(rowData)=>{
                    if(rowData.saida!==null){
                        return <span>{formatarParaReal(rowData.saida) }</span>
                    }
                    else{
                        return <span>0</span>
                    }
                }
            }/>
            <Column field='balanco' header='Saldo'
                body={(rowData)=>{
                    if(rowData.balanco!==null){
                      return <span>{formatarParaReal(rowData.balanco)}</span>
                    }
                    else{
                        return <span>0</span>
                    }}
            
                }/>
        </DataTable>
    )
} export  default TabelaAnaliseVendasVsSaidas

