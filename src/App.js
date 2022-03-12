import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import { CartProvider } from "./components/CartContext/CartContext";
//VIEWS

import Home from "./components/views/Home/Home";
import Electronics from "./components/views/Categories/Electronics/Electronics";
import Jewelry from "./components/views/Categories/Jewelry/Jewelry";
import MenClothing from "./components/views/Categories/MenClothing/MenClothing";
import WomenClothing from "./components/views/Categories/WomenClothing/WomenClothing";
import AboutUs from "./components/views/Categories/AboutUs/AboutUs";
import ItemDetailContainer from "./components/views/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/views/Cart/Cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/men's%20clothing" element={<MenClothing />} />
          <Route path="/women's%20clothing" element={<WomenClothing />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/:Detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
