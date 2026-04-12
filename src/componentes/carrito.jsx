import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    setCart(cart.map(p =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    ));
  };

  const disminuir = (id) => {
    setCart(
      cart
        .map(p =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter(p => p.count > 0)
    );
  };

  const total = cart.reduce(
    (acc, p) => acc + p.price * p.count,
    0
  );

  return (
    <div className="container">
      <h2 className="mb-4">🛒 Carrito de compras</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex justify-content-between align-items-center border-bottom py-3"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={pizza.img} alt={pizza.name} width="60" />
            <span>{pizza.name}</span>
          </div>

          <span>${pizza.price.toLocaleString("es-CL")}</span>

          <div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => disminuir(pizza.id)}
            >
              -
            </button>

            <span className="mx-2">{pizza.count}</span>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => aumentar(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h4 className="mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h4>

      <button className="btn btn-dark mt-2">
        Pagar 💳
      </button>
    </div>
  );
};

export default Cart;