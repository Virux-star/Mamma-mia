const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        width: "250px",
        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <img src={img} alt={name} width="100%" />

      <h3>{name}</h3>
      <hr />

      <p><strong>Ingredientes:</strong></p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {ingredients.map((ing, i) => (
          <li key={i}>🍕 {ing}</li>
        ))}
      </ul>

      <hr />

      <p><strong>Precio:</strong> ${price.toLocaleString("es-CL")}</p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button>Ver más 👀</button>
        <button>Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;