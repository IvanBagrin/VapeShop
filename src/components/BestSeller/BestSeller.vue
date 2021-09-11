<template>
    <div class = 'h-855 min-h-full pt-20 pb-20'>
        <div class = "text-center">
            <div class = "text-brownMy font-bold text-2xl">Best seller</div>
            <div class = 'text-5xl font-bold leading-normal text-blackMy'>Best Seller Product</div>
            <button class = 'w-44 h-14 border border-blackMy rounded bg-blackMy text-white font-medium text-lg mt-14'>Browse all</button>
        </div>
        <div class = "flex justify-between mt-16">
            <div>
                <img class="h-72 rounded" src="../../assets/img/bestSeller/bestSeller.png" alt="bestseller">
                <div class = "mt-5 ml-4 text-lg font-bold">
                    <div>Strawberry Liquid</div>
                    <div class = "text-xl text-brownMy">$<span>19</span></div>
                </div>
            </div>
            <div>
                <img class="h-72 rounded" src="../../assets/img/bestSeller/bestSeller.png" alt="bestseller">
                <div class = "mt-5 ml-4 text-lg font-bold">
                    <div>Monsta Stater Kit</div>
                    <div class = "text-xl text-brownMy">$<span>47</span></div>
                </div>
            </div>
            <div>
                <img class="h-72 rounded" src="../../assets/img/bestSeller/bestSeller.png" alt="bestseller">
                <div class = "mt-5 ml-4 text-lg font-bold">
                    <div>Banana Liquid</div>
                    <div class = "text-xl text-brownMy">$<span>17</span></div>
                </div>
            </div>
            <div>
                <img class="h-72 rounded" src="../../assets/img/bestSeller/bestSeller.png" alt="bestseller">
                <div class = "mt-5 ml-4 text-lg font-bold">
                    <div>Amagis Vape Grip</div>
                    <div class = "text-xl text-brownMy">$<span>47</span></div>
                </div>
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