import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">{name}</h5>

        <hr />

        <p className="fw-bold mb-1">Ingredientes:</p>
        <ul className="list-unstyled">
          {ingredients.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
          ))}
        </ul>

        <hr />

        <p className="text-center fw-bold">
          ${price.toLocaleString("es-CL")}
        </p>

        <div className="d-flex justify-content-between mt-auto">
          <button className="btn btn-outline-dark btn-sm">
            Ver más 👀
          </button>

          <button
            className="btn btn-dark btn-sm"
            onClick={() => addToCart({ id, name, price, img })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;