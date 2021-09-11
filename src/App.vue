<template>
  <Header class="container mx-auto MyContainer"/>
  <Promo class="container mx-auto MyContainer" />
  <ProductCategories class="container mx-auto MyContainer"/>
  <Benefit class="container mx-auto MyContainer"/>
  <Difference class="container mx-auto MyContainer"/>
  <BestSeller class="container mx-auto MyContainer"/>
  <ProductBrand class="container mx-auto MyContainer"/>
  <Posts class="container mx-auto MyContainer" />
  <Sale class="container mx-auto MyContainer"/>
  <Bottom class="container mx-auto px-4" />
</template>

<script>
import Header from './components/Header/Header.vue';
import Promo from "./components/Promo/Promo.vue"
import ProductCategories from './components/ProductCategories/ProductCategories.vue'
import Benefit from "./components/Benefit/Benefit.vue"
import Difference from "./components/Difference/Difference.vue"
import BestSeller from "./components/BestSeller/BestSeller.vue"
import ProductBrand from './components/ProductBrand/ProductBrand.vue'
import Posts from './components/Posts/Posts.vue'
import Sale from './components/Sale/Sale.vue'
import Bottom from './components/Bottom/Bottom.vue'
import './assets/tailwind.css';

export default {
  name: 'App',
  components: {
    Header,
    Promo,
    ProductCategories,
    Benefit,
    Difference,
    BestSeller,
    ProductBrand,
    Posts,
    Sale,
    Bottom,
  },
};
</script>

<style>

</style>
