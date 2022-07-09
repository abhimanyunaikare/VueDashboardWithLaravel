<template>
  <HeaderTop title="InnRobotics"></HeaderTop>
  <router-view></router-view>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue'
export default {
  name: 'App',
  components: {
    HeaderTop
  }
}
</script>

<style>

</style>
