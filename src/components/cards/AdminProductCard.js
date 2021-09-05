import React from "react";
import { Card } from "antd";
import defaultImg from "../../images/default.jpeg";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminProductCard = ({ product, handleRemove }) => {
  const { title, description, images, slug } = product;

  return (
    <Card
      className="p-1"
      cover={
        <img
          alt=""
          style={{ height: "150px", objectFit: "cover" }}
          src={images && images.length ? images[0].url : defaultImg}
        />
      }
      actions={[
        <Link to={`/admin/product/${slug}`}>
          <EditOutlined className="text-warning" />,
        </Link>,
        <DeleteOutlined
          onClick={() => handleRemove(slug)}
          className="text-danger"
        />,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 35)}...`}
      />
    </Card>
  );
};

export default AdminProductCard;
