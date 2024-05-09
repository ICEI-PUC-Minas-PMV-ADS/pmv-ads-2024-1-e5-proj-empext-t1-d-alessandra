
import dayjs from 'dayjs';
import ModalTodasCompras from "../Modal/ModaisHistorico/ModalTodasCompras"
import {formatarParaReal} from "../Utils/utils"
function CardInfromacoesCompra(props) {
    return (
      <div className="card w-46 bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-3xl font-bold ">{props.title}</h3>  
          <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    <p className="text-1xl font-bold">{"Quantidade de compras: "+ props.qtdDeCompra}</p>
                </div>
                <div className="collapse-content"> 
                    <p className="text-1xl font-bold">{"Itens comprados recentemente:"}</p>
                    <br></br>
                    <table className="table table-xs">
                                <thead>
                                    <tr>
                                        <th>Cod.Venda</th>
                                        <th>Produto</th>
                                        <th>Quantidade</th>
                                        <th>Valor Total</th>
                                        <th>Data da compra</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    
                                    (props.comprasRecentes.length === 0) ?(    
                                        <tr>
                                            <td colSpan="6">Nenhum item encotrando</td>
                                        </tr>
                                        
                                    ) : (
                                    props.comprasRecentes.map((item, index)  => (
                                        <tr key={index}>
                                            <td>{item.codVenda}</td>
                                            <td>{item.nomeProduto}</td>
                                            <td>{item.quantidade}</td>
                                            <td>{formatarParaReal(item.vlTotal)}</td>
                                            <td>{ dayjs(item.dtVenda).format("DD/MM/YYYY")}</td>
                                            </tr>
                                        )
                                      )
                                    )
                                }
                                </tbody>
                        </table>
                        <ModalTodasCompras id={props.id}/>
                    </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    <p className="text-1xl font-bold">{"Quantidade de compras em aberto: "+ props.qtdComprasPendentesPagamento}</p>
                </div>
                <div className="collapse-content"> 
                    <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th>Cod.Venda</th>
                                    <th>Produto</th>
                                    <th>Quantidade</th>
                                    <th>Valor Total</th>
                                    <th>Data da compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                
                                (props.compras.length === 0) ?(    
                                    <tr>
                                    <td colSpan="6">Nenhum item encotrando</td>
                                    </tr>
                                ) : (
                                props.compras.map((item, index)  => (
                                    <tr key={index}>
                                        <td>{item.codVenda}</td>
                                        <td>{item.nomeProduto}</td>
                                        <td>{item.quantidade}</td>
                                        <td>{formatarParaReal(item.vlTotal)}</td>
                                        <td>{ dayjs(item.dtVenda).format("DD/MM/YYYY")}</td>
                                        </tr>
                                    )))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  
  export default CardInfromacoesCompra;