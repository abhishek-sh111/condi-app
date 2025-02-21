import React from "react";
import { Card, Typography } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Contact: React.FC = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <Card bordered style={{ textAlign: "center" }}>
        <Title level={2}>📞 Contact Us</Title>
        <Text><PhoneOutlined /> <strong>Mobile:</strong> 8328128806</Text>
        <br />
        <Text>
          <MailOutlined /> <strong>Email:</strong>{" "}
          <a href="mailto:salesandcostumercare@srisaicondiments.com">
            salesandcostumercare@srisaicondiments.com
          </a>
        </Text>
      </Card>
    </div>
  );
};

export default Contact;
