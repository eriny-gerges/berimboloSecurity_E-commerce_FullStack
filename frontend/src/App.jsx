import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Products from "./components/products/Products";
import Serveses from "./components/serveses/Serveses";
import About from "./components/about/About";
import Product from "./components/products/Product";
import './App.css';
import Footer from "./components/Footer";


 
 
function App() {

  return (
    <>
    <div>
    <Navbar/>
    <Routes >
      <Route path="/"         element={<Home/>}     />
      <Route path="/Contact"  element={<Contact/>}  />
      <Route path="/Products" element={<Products/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/Serveses" element={<Serveses/>} />
      <Route path="/About"    element={<About/>}    />
    </Routes>
    <Footer/>
    </div>
    </>
  )
}
export default App
