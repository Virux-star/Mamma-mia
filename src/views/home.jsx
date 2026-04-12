import { pizzas } from "../data/pizzas";
import CardPizza from "../componentes/CardPizza";
import Header from "../componentes/Header";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container mt-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-sm-6 col-md-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;