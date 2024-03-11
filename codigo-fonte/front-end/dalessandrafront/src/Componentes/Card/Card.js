function Card(props) {
  return (
    <div className="card w-46 bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title ">{props.title}</h3>
        <p className="text-3xl">{props.textoExibir}</p>
      </div>
    </div>
  );
}

export default Card;