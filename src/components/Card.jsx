function Card({name, price, description}) {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-gradient-to-r from-red-500 to-red-900 text-white">R$ {price}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
