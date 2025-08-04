import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";


function AdminPage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!product.category) {
    alert("Please select a category!");
    return;
  }

  const endpoints = {
    home: "http://localhost:5000/api/home",      
    kids: "http://localhost:5000/api/kids",
    toys: "http://localhost:5000/api/toys",
    stationary: "http://localhost:5000/api/stationary",
  };

  try {
    const response = await axios.post(endpoints[product.category], product);

    console.log(response.data);
    alert(`Product Added to ${product.category} successfully!`);

    setProduct({ name: "", price: "", image: "", description: "", category: "" });
  } catch (error) {
    console.error(error);
    alert("Error adding product. Check console for details.");
  }
};


  return (
    <div className="container my-4" style={{width : "500px" }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="p-3 border rounded">
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="price"
          placeholder="Price"
          type="number"
          value={product.price}
          onChange={handleChange}
        />
        <input
      className="form-control mb-2"
        name="image"
      placeholder="Image URL (ex: /Toys/one.jpeg)"
      value={product.image}
      onChange={handleChange}
/>
        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <select
          className="form-select mb-2"
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="home">Home</option>
          <option value="kids">Kids Wear</option>
          <option value="stationary">Stationary</option>
          <option value="toys">Toys</option>
        </select>

        <button className="btn btn-success w-100">Add Product</button>
      </form>
       <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-success" onClick={() => navigate("/admin/home")}>
          Home
        </button>
        <button className="btn btn-success" onClick={() => navigate("/admin/kids")}>
          Kids Wear
        </button>
        <button className="btn btn-success" onClick={() => navigate("/admin/stationary")}>
          Stationary
        </button>
        <button className="btn btn-success" onClick={() => navigate("/admin/toys")}>
          Toys
        </button>
        <Link to="/admin/contacts">
        <button className="btn btn-warning" onClick={() => navigate("/admin/toys")}>
          Contact
        </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPage;
