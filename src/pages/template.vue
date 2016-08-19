<template>
  <div id="wrapper">

    <nav-bar></nav-bar>

    <div id="page-wrapper" class="gray-bg">

      <header-bar></header-bar>

      <router-view></router-view>

      <div class="footer">
        <div class="pull-right">10GB of <strong>250GB</strong> Free.</div>
        <div><strong>Copyright</strong> Example Company &copy; 2014-2015</div>
      </div>

    </div>
  </div>
</template>

<script>
  import NavBar from './template/nav'
  import HeaderBar from './template/header'

  export default {
    components: { NavBar, HeaderBar }
  }
</script>
