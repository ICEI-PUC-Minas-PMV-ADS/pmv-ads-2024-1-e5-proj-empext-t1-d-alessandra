import CardAlertaItemNaoEncontrado from "../../Card/CardAlertaItemNaoEncontrado";
import ModalHistorico from "../../Modal/ModaisHistorico/ModalHistorico"
function ListaHistorico({dados}){
    
    console.log(dados)
    return(
        <div className="overflow-x-auto h-96">
        <table className="table table-pin-rows">
            <thead>
                <tr>
                    <th>Codigo do cliente</th>
                    <th>Cliente</th>
                    <th>Email</th>
                   
                </tr>
            </thead>
            <tbody>
              <br></br>
                {
                 (dados.length === 0) ?(    
                    <CardAlertaItemNaoEncontrado  textoExibir="Nenhum item encotrando"/>
                 ) : 
                  dados.map((item, index) => {
                     return(
                        <tr key={index}>
                            <td>{item.codCliente}</td>
                            <td>{item.nomeCliente}</td>
                            <td>{item.email}</td>
                            <td><ModalHistorico id={item.codCliente}/></td>
                            <td> {
                                item.qtdComprasPendentesPagamento !== 0 && 
                                (<div className="badge badge-warning">Pagamentos Pendentes</div>)
                                }
                            </td>
                        </tr>
                        )
                      }
                    )
                }
            </tbody>
        </table>
          
        </div>
    )
}export default ListaHistorico;