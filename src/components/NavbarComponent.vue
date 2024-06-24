<template>
  <nav class="hidden md:flex justify-end mt-3 space-x-8 text-white font-alata text-sm md:-mr-20 lg:mr-10">
    <a href="#" class="nav-link">About</a>
    <a href="#" class="nav-link">Careers</a>
    <a href="#" class="nav-link">Events</a>
    <a href="#" class="nav-link">Products</a>
    <a href="#" class="nav-link">Support</a>
  </nav>
</template>

<style scoped>
.nav-link::after {
  content: '';
  display: block;
  width: 50%;
  height: 2px;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
  margin: auto;
  margin-top: 8px;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>