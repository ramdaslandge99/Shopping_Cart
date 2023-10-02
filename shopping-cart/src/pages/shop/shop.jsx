import React from "react";
import PRODUCTS from "../../products";
import Product from "./Product";
import "./Shop1.css";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Mr Shopping Mart</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, i) => (
          <Product data={product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
