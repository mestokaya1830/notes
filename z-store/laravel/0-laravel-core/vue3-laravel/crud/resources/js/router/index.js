import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import ProductDetails from "../views/ProductDetails.vue";
import AddProduct from "../views/AddProduct.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/addproduct",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetails
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;