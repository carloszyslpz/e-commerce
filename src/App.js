import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import { CartProvider } from "./components/CartContext/CartContext";
//VIEWS

import Home from "./components/views/Home/Home";
import Nosotros from "./components/views/Nosotros/Nosotros";
import Productos from "./components/views/Productos/Productos";
import Registro from "./components/views/Registro/Registro";
import Contacto from "./components/views/Contacto/Contacto";
import ItemDetailContainer from "./components/views/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/views/Cart/Cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/:Detalle/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
