import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from "./components/CartContext/CartContext";
//VIEWS

import Home from "./components/views/Home/Home";
import Electronics from "./components/views/Categories/Electronics/Electronics";
import Jewelery from "./components/views/Categories/Jewelery/Jewelery";
import MenClothing from "./components/views/Categories/MenClothing/MenClothing";
import WomenClothing from "./components/views/Categories/WomenClothing/WomenClothing";
import AboutUs from "./components/views/Categories/AboutUs/AboutUs";
import ItemDetailContainer from "./components/views/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/views/Cart/Cart";
import CompraFinalizada from "./components/views/Form/CompraFinalizada";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Jewelery" element={<Jewelery />} />
          <Route path="/Men'sClothing" element={<MenClothing />} />
          <Route path="/Women'sClothing" element={<WomenClothing />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/:Detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/CompraFinalizada" element={<CompraFinalizada />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
