import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agregar producto
  const addToCart = (pizza) => {
    const pizzaId = pizza.id ?? pizza.name;

    setCart((prev) => {
      const existe = prev.find((p) => p.id === pizzaId);

      if (existe) {
        return prev.map((p) =>
          p.id === pizzaId ? { ...p, count: p.count + 1 } : p
        );
      }

      return [...prev, { ...pizza, id: pizzaId, count: 1 }];
    });
  };

  // aumentar
  const increase = (id) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  // disminuir
  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0)
    );
  };

  // total
  const total = cart.reduce(
    (acc, p) => acc + p.price * p.count,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;