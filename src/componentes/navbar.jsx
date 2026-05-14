import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);

  const { token, logout } = useContext(UserContext);

  return (
    <nav style={{ padding: "10px", background: "#222", color: "white" }}>
      <Link to="/">
        <button>🍕 Home</button>
      </Link>

      {token ? (
        <>
          <Link to="/profile">
            <button>🔓 Profile</button>
          </Link>

          <button onClick={logout}>
            🔒 Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button>🔐 Login</button>
          </Link>

          <Link to="/register">
            <button>🔐 Register</button>
          </Link>
        </>
      )}

      <Link to="/cart">
        <button style={{ float: "right" }}>
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;