import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  handleCategoryChange,
  values,
  categories,
  subOptions,
  arrayOfSubs,
  selectedCategory,
  setArrayOfSubsId,
}) => {
  const {
    title,
    description,
    price,
    category,
    shipping,
    quantity,
    colors,
    brands,
    color,
    brand,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={handleChange}
          name="title"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={handleChange}
          name="description"
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={handleChange}
          name="price"
        />
      </div>
      <div className="form-group">
        <label>Shipping</label>
        <select
          value={shipping === "Yes" ? "Yes" : "No"}
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value={"No"}>No</option>
          <option value={"Yes"}>Yes</option>
        </select>
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Color</label>
        <select
          value={color}
          name="color"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Brand</label>
        <select
          value={brand}
          name="brand"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          {brands.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Sub Categories</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeolder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubsId(value)}
        >
          {subOptions.length &&
            subOptions.map((s) => (
              <Option value={s._id} key={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
      </div>

      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductUpdateForm;
