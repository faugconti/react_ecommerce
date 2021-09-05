import axios from "axios";

// export const getCategories = async () =>
//   await axios.get(`${process.env.REACT_APP_API}/categories`);

// export const getCategory = async (slug, authToken) =>
//   await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);

// export const removeCategory = async (slug, authToken) =>
//   await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
//     headers: {
//       authToken,
//     },
//   });

// export const updateCategory = async (slug, category, authToken) =>
//   await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, category, {
//     headers: {
//       authToken,
//     },
//   });
export const getProductsByCount = async (count) => {
  return await axios.get(`${process.env.REACT_APP_API}/products/${count}`);
};

export const getProduct = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/product/${slug}`);
};

export const createProduct = async (product, authToken) =>
  await axios.post(`${process.env.REACT_APP_API}/product/`, product, {
    headers: {
      authToken,
    },
  });

export const updateProduct = async (slug, product, authToken) =>
  await axios.put(`${process.env.REACT_APP_API}/product/${slug}`, product, {
    headers: {
      authToken,
    },
  });

export const removeProduct = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/product/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const getProducts = async (sort, order, page) =>
  await axios.post(`${process.env.REACT_APP_API}/products/`, {
    sort,
    order,
    page,
  });

export const getProductsCount = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/products/total`);
};

export const productStar = async (productId, star, authToken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/product/star/${productId}`,
    { star },
    {
      headers: {
        authToken,
      },
    }
  );

export const getRelated = async (productId) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/product/related/${productId}`
  );
};
