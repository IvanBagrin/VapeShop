<template>
     <div class = 'xl:h-570 min-h-full box-border py-14'>
        <div class = 'bg-blackMy xl:h-450 rounded-lg text-center pt-14 pb-10'>
            <div class = 'w-60 xl:w-auto mx-auto xl:w-none text-white text-5xl font-bold'>
                Summer sale
            </div>
            <div class = 'w-48 xl:w-auto mx-auto xl:w-none text-white text-lg mt-2.5'>
                subscribe to get our best promo first
            </div>
            <input class = 'h-16 xl:h-24 w-72 xl:w-790 mt-10 text-lg px-5 rounded-lg text-center text-blackMy placeholder-blackMy focus:outline-none' type="text" placeholder = 'Type your email here'>
            <button class = 'w-44 h-14 border block mx-auto border-brownMy rounded bg-brownMy text-white font-medium text-lg mt-14'>Subscribe</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sale',
  props: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>