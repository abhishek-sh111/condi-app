import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ShoppingCartOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        {/* Navbar */}
        <Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8b400" }}>
          <h1 style={{ color: "#fff", margin: 0 }}>🍔 Sri Sai Condiments</h1>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ flex: 1, justifyContent: "flex-end" }}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
              <Link to="/cart">Cart</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PhoneOutlined />}>
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </Header>

        {/* Routing Setup */}
        <Content style={{ padding: "20px", minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center", background: "#f8b400", color: "#fff" }}>
          🍔 Sri Sai Condiments ©2025 - All Rights Reserved
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
