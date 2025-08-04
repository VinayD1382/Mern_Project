import './home.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import ProductCard from "./Productcart";
import Kidscard from './Kidscard.jsx';
import Footer from "./Footer";
import ProductList from './Components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import AdminPage from './Components/Admin.jsx';
import AdminCategoryPage from './Components/AdminCategoryPage'; // New reusable page
import StationCard from './Stationarycard.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import ContactsDetails from './Components/Contactdetails.jsx';
function App() {
  const [products, setProducts] = useState([]);
    const [kidsproducts, kidssetProducts] = useState([]);
    const [Stationproducts, StationsetProducts] = useState([]);
    const [Toyproducts, ToysetProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const currentLocation = useLocation(); 

 useEffect(() => {
  axios.get("http://localhost:5000/api/home")
    .then(res => setProducts(res.data))
    .catch(err => console.error(err));
}, []);


useEffect(() => {
  axios.get("http://localhost:5000/api/kids") 
    .then(res => kidssetProducts(res.data))
    .catch(err => console.error(err));
}, []);

useEffect(() => {
  axios.get("http://localhost:5000/api/stationary")  
    .then(res => StationsetProducts(res.data))
    .catch(err => console.error(err));
}, []);
useEffect(() => {
  axios.get("http://localhost:5000/api/toys")  
    .then(res => ToysetProducts(res.data))
    .catch(err => console.error(err));
}, []);
 
  return (
    <div className="page-container">
<Header cartCount={cartCount} wishlistCount={wishlistCount} />
      {currentLocation.pathname === "/" && (
        <div className="offer-banner">
          <marquee behavior="scroll" direction="left" scrollamount="8">
            🎉 Offer of the Day: 50% OFF on Below Products 🎉
          </marquee>
        </div>
      )}
      <div className="content-wrap">
      <Routes>
        {/*for productcard component to display in web page used to call with path "/" :localhost:7000/ */}
        <Route path="/"
          element={
            <div className="product-grid container my-4">
              {products.length === 0 ? (
                <p className="text-center mt-5">No products available</p>
              ) : (
                products.map((product, index) => (
                  <ProductCard key={index} {...product} onAddToCart={() => setCartCount(cartCount + 1)} 
                  onAddToWishlist={() => setWishlistCount(wishlistCount + 1)}/>

                ))
              )}
            </div>
          }
        />
       <Route path="/kidswear"
    element={
      <div className="product-grid container my-4">
        {kidsproducts.length === 0 ? (
          <p className="text-center mt-5">No products available</p>
        ) : (
          kidsproducts.map((product, index) => (
            <Kidscard key={index} {...product} />
          ))
        )}
      </div>
      
    }
  />
   <Route path="/stationary"
    element={
      <div className="product-grid container my-4">
        {Stationproducts.length === 0 ? (
          <p className="text-center mt-5">No products available</p>
        ) : (
          Stationproducts.map((product, index) => (
            <Kidscard key={index} {...product} />
          ))
        )}
      </div>
      
    }
  />
  <Route path="/toys"
    element={
      <div className="product-grid container my-4">
        {Toyproducts.length === 0 ? (
          <p className="text-center mt-5">No products available</p>
        ) : (
          Toyproducts.map((product, index) => (
            <Kidscard key={index} {...product} />
          ))
        )}
      </div>
      
    }
  />


        <Route path="/products" element={<ProductList/>} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/home" element={<AdminCategoryPage category="Home" />} /> 
        <Route path="/admin/kids" element={<AdminCategoryPage category="Kids Wear" />} />
        <Route path="/admin/stationary" element={<AdminCategoryPage category="Stationary" />} />
        <Route path="/admin/toys" element={<AdminCategoryPage category="Toys" />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin/contacts" element={<ContactsDetails />} />

      </Routes>
      </div>
      {/*without browser refresh to load page we need browserrouter */}
  <Footer />
  </div>
);
}


export default App;


