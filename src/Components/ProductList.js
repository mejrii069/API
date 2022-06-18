import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function ProductList() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setproducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log({ msg: "list of products", products });

  return (
    <div
      style={{
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
      }}
    >
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductList;
