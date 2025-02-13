import React from "react";
import { Layout, Menu } from "antd";
import { ShoppingCartOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      {/* Navbar */}
      <Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8b400" }}>
        <h1 style={{ color: "#fff", margin: 0 }}>🍔 Sri Sai Condiments</h1>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ flex: 1, justifyContent: "flex-end" }}>
          <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="2" icon={<ShoppingCartOutlined />}>Cart</Menu.Item>
          <Menu.Item key="3" icon={<PhoneOutlined />}>Contact</Menu.Item>
        </Menu>
      </Header>

      {/* Main Content */}
      <Content style={{ padding: "20px", minHeight: "80vh" }}>
        <h2>🍕 Explore Our Eatables</h2>
        <p>Delicious snacks for you!</p>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center", background: "#f8b400", color: "#fff" }}>
        🍔 Sri Sai Condiments ©2025 - All Rights Reserved
      </Footer>
    </Layout>
  );
};

export default App;
