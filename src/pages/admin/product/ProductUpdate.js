import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../functions/product";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";

// import { useParams } from "react-router-dom";

const initialState = {
  title: "",
  description: "",
  price: "",
  category: "",
  // subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "Brown", "Silver", "White", "Blue", "Red"],
  brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "Asus"],
  color: "",
  brand: "",
};

const ProductUpdate = ({ match ,history}) => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [arrayOfSubsId, setArrayOfSubsId] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  // let { slug } = useParams();
  let { slug } = match.params;

  useEffect(() => {
    loadProduct();
    loadCategories();
  }, []);

  const loadProduct = () => {
    getProduct(slug)
      .then((product) => {
        // load single product
        setValues({ ...values, ...product.data });
        // load single product category subs
        getCategorySubs(product.data.category._id).then((res) => {
          setSubOptions(res.data);
        });
        // prepare array of sub ids to show as default sub values in antd select
        let arr = [];
        product.data.subs.map((s) => {
          arr.push(s._id);
        });
        setArrayOfSubsId((prev) => arr); //required for antd
      })
      .catch((err) => {});
  };

  const loadCategories = () => {
    getCategories().then((c) => setCategories(c.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    values.subs = arrayOfSubsId;
    values.category = selectedCategory ? selectedCategory : values.category;

    updateProduct(slug, values, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`"${res.data.title}" is updated`);
        history.push('/admin/products')
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setValues({ ...values, subs: [] });

    setSelectedCategory(e.target.value);
    console.log(selectedCategory, values.category._id);

    getCategorySubs(e.target.value).then((res) => {
      setSubOptions(res.data);
    });
    // user clickes back to original category
    // show its sub categorites in default
    if (values.category._id === e.target.value) {
      loadProduct();
    }
    //clear old categories
    setArrayOfSubsId([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4>Product update</h4>
          )}
          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <ProductUpdateForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCategoryChange={handleCategoryChange}
            setValues={setValues}
            values={values}
            arrayOfSubs={arrayOfSubsId}
            setArrayOfSubsId={setArrayOfSubsId}
            categories={categories}
            selectedCategory={selectedCategory}
            subOptions={subOptions}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
