import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined, ShoppingCartOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Toggle Drawer for mobile menu
  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <Router>
      <Layout>
        {/* Navbar */}
        <Header style={{ display: "flex", alignItems: "center", background: "#f8b400", padding: "0 20px" }}>
          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{ display: "none", color: "#fff", fontSize: "20px" }}
            className="mobile-menu-btn"
          />

          {/* Logo */}
          <h1 style={{ color: "#fff", margin: "0 auto", fontSize: "18px" }}>🍔 Sri Sai Condiments</h1>

          {/* Desktop Menu */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} className="desktop-menu">
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

        {/* Mobile Drawer Menu */}
        <Drawer title="Menu" placement="left" onClose={closeDrawer} open={visible}>
          <Menu mode="vertical" theme="light">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/" onClick={closeDrawer}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
              <Link to="/cart" onClick={closeDrawer}>Cart</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PhoneOutlined />}>
              <Link to="/contact" onClick={closeDrawer}>Contact</Link>
            </Menu.Item>
          </Menu>
        </Drawer>

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
