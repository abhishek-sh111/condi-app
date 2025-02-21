import React, { useState, useEffect } from "react";
import { List, Button, message, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    // Get cart data from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (index: number) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    message.success("Item removed from cart!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Title level={2}>🛒 Your Cart</Title>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <List
            bordered
            dataSource={cartItems}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <Button type="link" danger onClick={() => removeFromCart(index)}>
                    Remove
                  </Button>,
                ]}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                {item.name} - ₹{item.price}
              </List.Item>
            )}
          />

          <h3>Total: ₹{cartItems.reduce((total, item) => total + item.price, 0)}</h3>

          <Button type="primary" block>
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        </>
      )}

      <Button type="link" style={{ marginTop: "20px" }}>
        <Link to="/">← Continue Shopping</Link>
      </Button>
    </div>
  );
};

export default Cart;
