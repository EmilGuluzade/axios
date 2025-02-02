import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
