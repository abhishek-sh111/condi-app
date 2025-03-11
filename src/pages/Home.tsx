import React, { useState } from "react";
import { Card, Button, Row, Col, message } from "antd";

// const products = [
//   { id: 1, name: "Nipput", price: 120, image: "https://via.placeholder.com/100" },
//   { id: 2, name: "Chaklam", price: 250, image: "https://via.placeholder.com/100" },
//   { id: 3, name: "Karjayam", price: 80, image: "https://via.placeholder.com/100" },
// ];

const Home: React.FC<{ products: any[] }> = ({ products }) => {
  const [cart, setCart] = useState<any[]>(JSON.parse(localStorage.getItem("cart") || "[]"));

  const addToCart = (product: any) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    message.success(`${product.name} added to cart!`);
  };

  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8}>
          <Card
            cover={<img src={product.image} alt={product.name} />}
            actions={[
              <Button type="primary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>,
            ]}
          >
            <Card.Meta title={product.name} description={`₹${product.price}`} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};


export default Home;
