<template>
  <div class="food-detail">
    <NavbarComponent />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="require(`../assets/images/${product.gambar}`)"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Price :
            <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Order Qty</label>
              <input
                type="number"
                class="form-control"
                v-model="order.jumlah_pemesanan"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Order Details</label>
              <textarea
                v-model="order.keterangan"
                class="form-control"
                placeholder="Spicy, add more ice"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart> Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from "axios";

export default {
  name: "FoodDetailView",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      product: {},
      order: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.order.jumlah_pemesanan) {
        this.order.products = this.product;
        axios
          .post("http://localhost:3000/carts", this.order)
          .then(() => {
            this.$router.push({ path: "/cart" });
            this.$toast.success("Success added to cart!", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Order qty must be filled!", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
