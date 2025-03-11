import React, { useState, useEffect } from "react";
import { List, Button, message, Typography, Input } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [customerNumber, setCustomerNumber] = useState("");
  const ownerWhatsapp = "+918328128806"; // Store owner's WhatsApp number

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

  // Handle WhatsApp order submission
  const handleSubmitOrder = () => {
    if (!customerNumber || customerNumber.length < 10) {
      message.error("Please enter a valid WhatsApp number.");
      return;
    }

    if (cartItems.length === 0) {
      message.warning("Your cart is empty!");
      return;
    }

    const orderDetails = cartItems
      .map((item) => `📦 *${item.name}* - ₹${item.price}`)
      .join("\n");

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    const messageText = encodeURIComponent(
      `📢 *New Order Received!*

${orderDetails}

💰 *Total: ₹${totalAmount}*
📞 *Customer WhatsApp: ${customerNumber}*`
    );

    const whatsappUrl = `https://wa.me/${ownerWhatsapp}?text=${messageText}`;

    // Open WhatsApp chat with store owner
    window.open(whatsappUrl, "_blank");

    // Clear cart after checkout
    setCartItems([]);
    localStorage.removeItem("cart");
    message.success("Order submitted! The owner will contact you on WhatsApp.");
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

          <Input
            placeholder="Enter your WhatsApp number"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
            style={{ marginBottom: "10px" }}
          />

          <Button type="primary" block onClick={handleSubmitOrder}>
            Submit Order on WhatsApp
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
