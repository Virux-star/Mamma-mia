import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404</h1>
      <p>Página no encontrada</p>

      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;