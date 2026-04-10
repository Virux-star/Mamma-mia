import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";
import Home from "./views/home";
import Register from "./views/registro";
import Login from "./views/login";

function App() {
  return (
    <>
      <Navbar />

      {<Home />}
      {/* <Login /> */}
      {/* <Register /> */}

      <Footer />
    </>
  );
}

export default App;