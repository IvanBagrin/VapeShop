<template>
<div class = "relative">
  <BarMenu :menuBarHandle = "menuBarHandle" v-if="menuBarToggle" class="z-10" />
  <div class = "z-0">
    <Header :menuBarHandle = "menuBarHandle" class="container mx-auto px-6 "/>
    <Promo class="container mx-auto px-6 " />
    <ProductCategories class="container mx-auto px-6 "/>
    <Benefit class="container mx-auto px-6 "/>
    <Difference class="container mx-auto px-6 "/>
    <BestSeller class="container mx-auto px-6 "/>
    <ProductBrand class="container mx-auto px-6 "/>
    <Posts class="container mx-auto px-6 " />
    <Sale class="container mx-auto px-6 "/>
    <Bottom class="container mx-auto px-6 " />
  </div>

</div>
  

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
import BarMenu from './components/BarMenu/BarMenu.vue'
import './assets/tailwind.css';


export default {
  name: 'App',
  data() {
    return {
      menuBarToggle: false
    }
  },
  methods: {
    menuBarHandle() {
      this.menuBarToggle = !this.menuBarToggle
      console.log(this.menuBarToggle)
    }
  },
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
    BarMenu,
  },
};
</script>

<style>

</style>
