<template>
  <div class="main">
    <div class="main_inner">
      <NavBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
  }
}
</script>

<style>
.main {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  
  /* background: linear-gradient(to bottom, #a6d900 0%, #ff4454 100%);
  opacity: 0.5;
  animation: huerotator 3s infinite alternate; */
}

@keyframes huerotator {
  0% {
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
  }

  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
.main_inner {
  width: 100%;
  height: 100%;
  max-height: 100%;
  background: linear-gradient(to bottom, #a6d900 0%, #ff4454 100%);
  opacity: 0.5;
  animation: huerotator 3s infinite alternate;
}
</style>
