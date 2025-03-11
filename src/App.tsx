import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, message } from "antd";
import {
  ShoppingCartOutlined,
  HomeOutlined,
  PhoneOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [products, setProducts] = useState<{ id: number; name: string; price: number; image: string }[]>([]);
  const navigate = useNavigate();

  // Load authentication state & products from localStorage
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(storedProducts);
  }, []);

  // Handle product addition
  const addProduct = (newProduct: any) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  // Handle logout
  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    message.success("You have logged out successfully.");
    navigate("/login");
  };

  return (
    <Layout>
      {/* Header Section */}
      <Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8b400", padding: "0 20px" }}>
        {/* App Title */}
        <h1 style={{ color: "#fff", fontSize: "18px", margin: 0 }}>🍔 Sri Sai Condiments</h1>

        {/* Navigation Menu */}
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1, justifyContent: "center", background: "transparent" }}
          items={[
            { key: "1", icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
            { key: "2", icon: <ShoppingCartOutlined />, label: <Link to="/cart">Cart</Link> },
            { key: "3", icon: <PhoneOutlined />, label: <Link to="/contact">Contact</Link> },
            ...(isAuthenticated ? [{ key: "4", icon: <UserOutlined />, label: <Link to="/admin">Admin</Link> }] : []),
          ]}
        />

        {/* Logout Button (if authenticated) */}
        {isAuthenticated && (
          <Button type="primary" icon={<LogoutOutlined />} onClick={logout} style={{ marginLeft: "10px", backgroundColor: "#d9534f", border: "none" }}>
            Logout
          </Button>
        )}
      </Header>

      {/* Content Section */}
      <Content style={{ padding: "20px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          (isAuthenticated && 
            <Route path="/admin" element={<Admin products={products} setProducts={setProducts} />} />
          )
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>

      {/* Footer Section */}
      <Footer style={{ textAlign: "center", background: "#f8b400", color: "#fff" }}>
        🍔 Sri Sai Condiments ©2025 - All Rights Reserved
      </Footer>
    </Layout>
  );
};

export default App;
