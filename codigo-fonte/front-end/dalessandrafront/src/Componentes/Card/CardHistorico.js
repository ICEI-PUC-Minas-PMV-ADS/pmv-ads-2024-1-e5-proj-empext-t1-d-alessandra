function CardHistorico(props) {
    return (
      <div className="card w-46 bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-3xl font-bold ">{props.title}</h3>
          <p className="text-1xl font-bold">{"CPF/CPNJ :"+props.cpf}</p>
          <p className="text-1xl font-bold">{"Email: "+props.email}</p>
          <p className="text-1xl font-bold">{"Telefone: "+props.telefone}</p>
          <p className="text-1xl font-bold">{"Endereço: "+props.endereco}</p>
        </div>
      </div>
    );
  }
  
  export default CardHistorico;