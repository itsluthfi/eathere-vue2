<template>
  <div>
    <NavbarComponent />
    <h1>Cart</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "CartView",
  components: {
    NavbarComponent,
  },
};
</script>

<style></style>
