import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

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

          <button>🔒 Logout</button>
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