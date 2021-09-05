import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import defaultImg from "../../images/default.jpeg";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";

const Meta = Card.Meta;

const ProductCard = ({ product }) => {
  const { images, title, description, slug } = product;

  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}
      <Card
        cover={
          <img
            alt=""
            src={images && images.length ? images[0].url : defaultImg}
            style={{ height: "150px", objectFit: "contain" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" />
            <br />
            View Product
          </Link>,
          <>
            <ShoppingCartOutlined className="text-danger" />
            <br />
            Add to Cart
          </>,
        ]}
      >
        <Meta
          title={title}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
