
import ExibirCompras from "../Modal/ModalTelaDevedores/exibirCompras";
import CardAlertaItemNaoEncontrado from "./CardAlertaItemNaoEncontrado";
import dayjs from 'dayjs';
function CardInfromacoesCompra(props) {
    return (
      <div className="card w-46 bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-3xl font-bold ">{props.title}</h3>
          
          <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                    <p className="text-1xl font-bold">{"Quantidade de compras: "+ props.qtdDeCompra}</p>
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    <p className="text-1xl font-bold">{"Quantidade de compras em aberto: "+ props.qtdComprasPendentesPagamento}</p>
                </div>
                <div className="collapse-content"> 
                    <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Tamanho</th>
                                    <th>Quantidade</th>
                                    <th>Valor Total</th>
                                    <th>Data da compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                
                                (props.compras.length === 0) ?(    
                                    <CardAlertaItemNaoEncontrado  textoExibir="Nenhum item encotrando"/>
                                ) : (
                                props.compras.map((item, index)  => (
                                    <tr key={index}>
                                        <td>{item.nomeProduto}</td>
                                        <td>{item.tamanho}</td>
                                        <td>{item.quantidade}</td>
                                        <td>{item.vlTotal}</td>
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