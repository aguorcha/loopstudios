<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <header class="relative w-full h-[640px] bg-cover bg-no-repeat flex items-center justify-center">
    <img class="relative w-screen" src="../assets/images/mobile/image-hero.jpg" alt="Image Hero">
    <div class="absolute w-full top-0 left-0 mt-10 flex justify-between items-center">
      <img class="w-44 pl-6" src="../assets/images/logo.svg" alt="Loopstudios Logo">
      <img class="w-14 h-5 pr-6" src="../assets/images/icon-hamburger.svg" alt="Menu Icon">
    </div>
    <div class="absolute w-4/5 p-6 pr-20 border-2 border-white">
      <h2 class="font-josefin-sans text-4xl font-light leading-none text-white">IMMERSIVE EXPERIENCES THAT DELIVER</h2>
    </div>
  </header>
</template>

<style scoped>
  /* .title-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 80%;
    padding: 24px;
    padding-right: 80px;
    border: 2px solid white;
  }
  .title-container h2 {
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 1;
    color: white;
  } */
</style>
