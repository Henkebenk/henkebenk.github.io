<script setup>
  import NavBar2 from './components/NavBar2.vue';
  import Hero from './components/Hero.vue';
  import AboutMe from './components/AboutMe.vue';
  import Projects from './components/Projects.vue';
  import Techniques from './components/Techniques.vue';
  import ScrollTop from 'primevue/scrolltop';
  import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app" class="bg-white dark:bg-zinc-950"> 
    <!-- <header>
      <NavBar2 />
    </header> -->
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Techniques />
    </main>
    <footer>
    </footer>
      <Footer />
    <ScrollTop :buttonProps="{ severity: 'contrast', raised: true, rounded: true }"/>
  </div>
</template>