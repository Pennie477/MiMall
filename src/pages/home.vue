<template>
  <div>
    home
    <nav-header></nav-header>
    <roter-view></roter-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from "./../components/NavHeader"
import NavFooter from "./../components/NavFooter"
  export default{
    name: "nav-home",
    conponents: {
      NavHeader,
      NavFooter
    }
  }
</script>
