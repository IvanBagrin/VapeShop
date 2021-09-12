<template>

    <div class='fixed h-screen w-screen bg-brownMy'>
       <div  v-on:click="menuBarHandle" class = 'absolute right-0 mt-5 mr-5'>
           <svg height="30pt" viewBox="0 0 329.26933 329" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>


       </div>
        <ul class="mt-24 ml-10 leading-relaxed text-5xl">
               <li><a href="#">Home</a></li>
               <li><a href="#">Shop</a></li>
               <li><a href="#">Contact us</a></li>
               <li><a href="#">Promo</a></li>
        </ul>

    </div>
      
</template>

<script>
export default {
  name: 'BarMenu',
  props: ['menuBarHandle'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
