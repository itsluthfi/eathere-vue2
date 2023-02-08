import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodView from "../views/FoodView.vue";
import CartView from "../views/CartView.vue";
import FoodDetailView from "../views/FoodDetailView.vue";
import SuccessOrderView from "../views/SuccessOrderView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "food",
    component: FoodView,
  },
  {
    path: "/foods/:id",
    name: "food-detail",
    component: FoodDetailView,
  },
  {
    path: "/carts",
    name: "cart",
    component: CartView,
  },
  {
    path: "/success-order",
    name: "success-order",
    component: SuccessOrderView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
