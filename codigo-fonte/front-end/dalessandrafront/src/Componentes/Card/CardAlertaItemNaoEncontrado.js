
import "../../Pages/estilo/cardAlerta.css"
function CardAlertaItemNaoEncontrado(props) {
    return (
      <div className="card  cardAlerta w-46 bg-base-100">
        <div className="card-body">
          <h3 className="card-title ">{props.title}</h3>
          <p className="text-2xl">{props.textoExibir}</p>
        </div>
      </div>
    );
  }
  
  export default CardAlertaItemNaoEncontrado;