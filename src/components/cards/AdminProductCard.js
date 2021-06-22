import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  const { title, description, images } = product;

  return (
    <Card
      className="p-1"
      cover={
        <img
          style={{ height: "150px", objectFit: "cover" }}
          src={images && images.length ? images[0].url : ""}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default AdminProductCard;
