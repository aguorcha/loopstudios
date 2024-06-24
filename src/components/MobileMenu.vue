<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
});

</script>

<template>
  <div v-show="isOpen" class="mobile-menu absolute w-full h-[720px] bg-black text-white z-50 mt-[450px] sm:mt-[360px] p-6">
    <div class="flex justify-between mt-6">
      <img class="logo w-40 sm-6" src="../assets/images/logo.svg" alt="Loopstudios Logo">
      <img class="icon-close w-5 h-5 mt-1" src="../assets/images/icon-close.svg" alt="Icon close" @click="onClose">
    </div>
    <nav class="flex flex-col mt-32 text-alata text-2xl font-light">
      <a href="#" class="mb-5">ABOUT</a>
      <a href="#" class="mb-5">CAREERS</a>
      <a href="#" class="mb-5">EVENTS</a>
      <a href="#" class="mb-5">PRODUCTS</a>
      <a href="#" class="mb-5">SUPPORT</a>
    </nav>
  </div>
</template>
