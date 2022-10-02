const AUTH_ROUTE_PREFIX = "/auth";
const CUSTOMER_ROUTE_PREFIX = "/customer";
const ADMIN_ROUTE_PREFIX = "/admin";

const AUTH_ROUTES = {
  SIGNUP: "/signup",
  LOGIN: "/login",
};

const CUSTOMER_ROUTES = {
  CART: "/cart",
};

const ADMIN_ROUTES = {
  ADD_BRAND: "/brand/add-brand",
  DELETE_BRAND: "/brand/delete-brand",
  UPDATE_BRAND: "/brand/update-brand",
  LIST_BRANDS: "/brand/list-brands",
  ADD_PRODUCT: "/product/add-product",
  UPDATE_PRODUCT: "/product/update-product",
  DELETE_PRODUCT: "/product/delete_product",
  LIST_PRODUCT: "/product/list-product",
};

module.exports = {
  AUTH_ROUTE_PREFIX,
  AUTH_ROUTES,
  CUSTOMER_ROUTE_PREFIX,
  CUSTOMER_ROUTES,
  ADMIN_ROUTES,
  ADMIN_ROUTE_PREFIX,
};
