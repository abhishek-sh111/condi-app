import React from "react";
import { Card, Row, Col, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;

const products = [
  { id: 1, name: "🍕 Margherita Pizza", price: 299, img: "https://source.unsplash.com/300x200/?pizza" },
  { id: 2, name: "🍔 Cheese Burger", price: 199, img: "https://source.unsplash.com/300x200/?burger" },
  { id: 3, name: "🍟 French Fries", price: 99, img: "https://source.unsplash.com/300x200/?fries" },
  { id: 4, name: "🍩 Chocolate Donut", price: 149, img: "https://source.unsplash.com/300x200/?donut" },
  { id: 5, name: "🍹 Fresh Juice", price: 89, img: "https://source.unsplash.com/300x200/?juice" },
];

const ProductList: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>🍽️ Our Delicious Eatables</h2>

      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.img} style={{ height: "200px", objectFit: "cover" }} />}
            >
              <Meta title={product.name} description={`₹${product.price}`} />
              <Button type="primary" icon={<ShoppingCartOutlined />} style={{ marginTop: "10px", width: "100%" }}>
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
