<template>
  <div>
    <NavbarComponent />
    <h1>Food</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "FoodView",
  components: {
    NavbarComponent,
  },
};
</script>

<style></style>
