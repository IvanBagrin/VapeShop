<template>
  <Header class="container mx-auto MyContainer"/>
  <Promo class="container mx-auto MyContainer" />
  <ProductCategories class="container mx-auto MyContainer"/>
  <Benefit class="container mx-auto MyContainer"/>
  <Difference class="container mx-auto MyContainer"/>
</template>

<script>
import Header from './components/Header/Header.vue';
import Promo from "./components/Promo/Promo.vue"
import ProductCategories from './components/ProductCategories/ProductCategories.vue'
import Benefit from "./components/Benefit/Benefit.vue"
import Difference from "./components/Difference/Difference.vue"
import './assets/tailwind.css';

export default {
  name: 'App',
  components: {
    Header,
    Promo,
    ProductCategories,
    Benefit,
    Difference,
  },
};
</script>

<style>

</style>
