<template>
  <footer class="bg-black p-10 flex flex-col justify-center items-center custom-grid">
    <div class="mt-6 md:flex md:items-center md:mt-0">
      <img class="w-46" src="../assets/images/logo.svg" alt="Logo Loopstudios">
    </div>

    <nav class="flex flex-col items-center mt-10 gap-6 text-white font-alata text-md md:flex-row md:mt-0">
      <a href="#" class="nav-link">About</a>
      <a href="#" class="nav-link">Careers</a>
      <a href="#" class="nav-link">Events</a>
      <a href="#" class="nav-link">Products</a>
      <a href="#" class="nav-link">Support</a>
    </nav>

    <div class="flex items-center justify-evenly md:justify-end w-full mt-12 md:gap-4 md:mt-0 cursor-pointer">
      <div class="social-link">
        <img src="../assets/images/icon-facebook.svg" alt="Facebook">
      </div>
      <div class="social-link">
        <img src="../assets/images/icon-twitter.svg" alt="Twitter">
      </div>
      <div class="social-link">
        <img src="../assets/images/icon-pinterest.svg" alt="Pinterest">
      </div>
      <div class="social-link">
        <img src="../assets/images/icon-instagram.svg" alt="Instagram">
      </div>
    </div>

    <div class="text-very-dark-grey font-alata mt-6 mb-10 md:flex md:justify-end md:items-center md:mt-10">
      <p class="text-center">© 2021 Loopstudios. All rights reserved.</p>
    </div>
    
  </footer>
</template>

<style scoped>
@media (min-width: 768px) {
  .custom-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
  }

  .custom-grid > div:first-child {
    grid-column: 1 / 2;
    grid-row: 1;
  }

  .custom-grid > nav {
    grid-column: 1;
    grid-row: 2;
  }

  .custom-grid > div:nth-child(3) {
    grid-column: 2;
    grid-row: 1;
  }

  .custom-grid > p {
    grid-column: 2;
    grid-row: 2;
  }

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

  .social-link:hover::after {
    transform: scaleX(1);
  }

  .social-link::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    margin: auto;
    margin-top: 8px;
  }
}
</style>