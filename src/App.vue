<template>
  <div id="app">
    <Header/>
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import Header from './components/Header/Header'
export default {
  components: {
    FooterGuide,
    Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    color: read
  *
    padding: 0
    margin: 0
</style>
