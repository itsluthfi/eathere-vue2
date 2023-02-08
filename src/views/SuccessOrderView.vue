<template>
  <div class="success-order">
    <NavbarComponent />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/menunggu.png" width="300" />
          <h2><strong>Order Success!</strong></h2>
          <h4>
            Your Order Will Be Soon Processed <br />
            Happy Waiting! :)
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  name: "SuccessOrderView",
  components: {
    NavbarComponent,
  },
};
</script>

<style></style>
