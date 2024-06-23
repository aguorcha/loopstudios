<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <header class="relative w-full h-[640px] bg-cover bg-no-repeat flex items-center justify-center">
    <div class="bg-header-image-mobile absolute w-full h-full bg-cover bg-no-repeat sm:hidden"></div>
    <div class="bg-header-image-desktop absolute w-full h-full bg-cover bg-no-repeat hidden sm:block"></div>

    <div class="header-info-container absolute w-full top-0 left-0 mt-10 grid grid-cols-2 sm:grid-rows-2 sm:grid-cols-2 sm:px-36 sm:py-10 items-center">
      <div class="col-span-1 ml-8 sm:row-span-1">
        <img class="logo w-44 sm-6" src="../assets/images/logo.svg" alt="Loopstudios Logo">
      </div>
      <div class="col-span-1 flex justify-end md:hidden">
        <img class="menu-icon w-14 h-5 pr-6" src="../assets/images/icon-hamburger.svg" alt="Menu Icon">
      </div>
      
      <nav class="hidden md:flex justify-end space-x-8 text-white font-alata text-sm md:-mr-20 lg:mr-10">
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Careers</a>
        <a href="#" class="nav-link">Events</a>
        <a href="#" class="nav-link">Products</a>
        <a href="#" class="nav-link">Support</a>
      </nav>

      <div class="col-span-2 flex justify-center sm:justify-start sm:col-span-2 sm:row-span-1 mt-[160px] sm:mt-24 sm:ml-6">
        <div class="title-container absolute w-[88%] p-6 pr-20 border-2 border-white sm:w-[460px]">
          <h2 class="font-josefin-sans text-4xl font-light leading-none text-white sm:text-5xl">IMMERSIVE EXPERIENCES THAT DELIVER</h2>
        </div>
      </div>
      <div class="col-span-1 md:row-span-1"></div>
    </div>
  </header>
</template>

<style scoped>

</style>
