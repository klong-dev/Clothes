<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>
<template>
  <header>
    <NavBar />
  </header>
  <content>
    <RouterView />
  </content>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped></style>