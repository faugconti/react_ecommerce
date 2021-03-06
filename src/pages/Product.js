import React, { useEffect, useState, useCallback } from "react";
import { getProduct, productStar, getRelated } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct.js";
import { useSelector } from "react-redux";
import ProductCard from "../components/cards/ProductCard";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [star, setStar] = useState(0);
  const [related, setRelated] = useState([]);
  const { slug } = match.params;

  const { user } = useSelector((state) => ({ ...state }));

  const loadSingleProduct = useCallback(() => {
    getProduct(slug).then((res) => {
      setProduct(res.data);
      //load related
      getRelated(res.data._id).then((res) => setRelated(res.data));
    });
  }, [slug]);

  useEffect(() => {
    loadSingleProduct();
  }, [loadSingleProduct]);

  useEffect(() => {
    if (product.ratings && user) {
      let existingRatingObject = product.ratings.find(
        (ele) => ele.postedBy.toString() === user._id.toString()
      );
      existingRatingObject && setStar(existingRatingObject.star);
    }
  }, [setStar, user, product.ratings]);

  const onStarClick = (newRating, name) => {
    setStar(newRating);
    console.table(newRating, name);
    productStar(name, newRating, user.token).then((res) => {
      console.log("rating clicked", res.data);
      loadSingleProduct();
    });
  };

  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <SingleProduct
          star={star}
          product={product}
          onStarClick={onStarClick}
        />
      </div>
      <div className="row">
        <div className="col text-center pt-5 pb-5">
          <hr />
          <h4>Related Products</h4>
          <hr />
        </div>
      </div>
      <div className="row pb-5">
        {related.length > 0 ? (
          related.map((r) => (
            <div key={r._id} className="col-md-4">
              <ProductCard product={r} />
            </div>
          ))
        ) : (
          <div className="text-center col"> No products found</div>
        )}
      </div>
    </div>
  );
};

export default Product;
