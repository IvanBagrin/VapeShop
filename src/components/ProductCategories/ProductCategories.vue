<template>
    <div class = "xl:h-530 flex flex-col xl:flex-row justify-between items-center reltive">
        <div class="text-5xl font-bold leading-normal text-blackMy mt-20 xl:mt-0">Product Categories</div>
        <div class="hidden absolute mt-60 xl:mt-0 w-760 xl:w-auto ml-420 xl:ml-0 xl:relative xl:grid grid-cols-3 gap-8 text-center font-bold">

            <div>
                <div class = "w-64 h-72">
                    <img src="../../assets/img/productCategories/productCat.png" alt="productCategories">
                </div>
                <div class = "text-lg">Accessoires</div>
            </div>
            <div>
                <div class = "w-64 h-72">
                    <img src="../../assets/img/productCategories/productCat.png" alt="productCategories">
                </div>
                <div class ="text-lg">Devices</div>
            </div>
            <div>
                <div class = "w-64 h-72">
                    <img src="../../assets/img/productCategories/productCat.png" alt="productCategories">
                </div>
                <div class ="text-lg" >Starter Kits</div>
            </div>
        </div>

    <carousel class = "carousel xl:hidden lg:hidden mt-10" :items-to-show="1.5">
        <slide v-for="slide in slides" :key="slide">
           <div class = "">
            <img class = "w-48" v-bind:src="require('../../assets/img/productCategories/' + slide.img)" />
            <div class ="text-lg font-bold mt-3" >{{slide.name}}</div>
            </div>
            
            
        </slide>
  </carousel>


   
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'ProductCategories',
  data() {
        return { slides: [{img:'1.jpg' ,name:'Accessoires'}, 
        {img:'2.jpg' , name:'Devices'}, 
        {img:'3.jpeg' ,name:'Starter Kits'}],
        
        }
  },
  components: { Carousel,
        Slide,  },
  
  props: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
