import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/registro";
import Cart from "./pages/carrito";
import Pizza from "./pages/pizza";
import Profile from "./pages/profile";
import NotFound from "./pages/notfound";

import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  // 👇 NUEVO
  const { token } = useContext(UserContext);

  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* 👇 RUTAS PROTEGIDAS */}
            <Route
              path="/register"
              element={
                !token ? <Register /> : <Navigate to="/" />
              }
            />

            <Route
              path="/login"
              element={
                !token ? <Login /> : <Navigate to="/" />
              }
            />

            <Route path="/cart" element={<Cart />} />

            <Route path="/pizza/:id" element={<Pizza />} />

            <Route
              path="/profile"
              element={
                token ? <Profile /> : <Navigate to="/login" />
              }
            />

            <Route path="/404" element={<NotFound />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;