<template>
    <div class = "h-530 flex justify-between items-center">
        <div class="text-5xl font-bold leading-normal text-blackMy">Product Categories</div>
        <div class="grid grid-cols-3 gap-8 text-center font-bold">
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

    </div>
</template>

<script>
export default {
  name: 'ProductCategories',
  props: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
