import React, { useState, useEffect } from "react";
import { Table, Button, Input, Upload, message } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Admin: React.FC<{ products: Product[]; setProducts: React.Dispatch<React.SetStateAction<Product[]>> }> = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(storedProducts);
  }, [setProducts]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (!name || !price || !image) {
      message.error("Please fill all fields and upload an image!");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      image,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setImage("");
    message.success("Product added successfully!");
  };

  const deleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    message.success("Product deleted successfully!");
  };

  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) setImage(e.target.result as string);
      };
      reader.readAsDataURL(file);
      return false;
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel - Manage Products</h2>
      <Input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: "10px" }} />
      <Input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} type="number" style={{ marginBottom: "10px" }} />
      <Upload {...uploadProps} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Upload Image</Button>
      </Upload>
      {image && <img src={image} alt="Preview" style={{ width: "100px", marginTop: "10px" }} />}
      <Button type="primary" onClick={addProduct} style={{ marginTop: "10px" }}>Add Product</Button>

      <Table
        dataSource={products}
        columns={[
          { title: "Image", dataIndex: "image", render: (src) => <img src={src} alt="product" style={{ width: "50px" }} /> },
          { title: "Name", dataIndex: "name" },
          { title: "Price", dataIndex: "price", render: (price) => `₹${price}` },
          {
            title: "Actions",
            render: (_, record) => (
              <Button danger icon={<DeleteOutlined />} onClick={() => deleteProduct(record.id)}>Delete</Button>
            ),
          },
        ]}
        rowKey="id"
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default Admin;
