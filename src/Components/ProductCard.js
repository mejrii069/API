import React from "react";
import { Card, Button } from "react-bootstrap";
const ProductCard = ({ product }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "300px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
