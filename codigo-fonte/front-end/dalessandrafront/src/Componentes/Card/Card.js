function Card(props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>
        <p>{props.textoExibir}</p>
      </div>
    </div>
  );
}

export default Card;