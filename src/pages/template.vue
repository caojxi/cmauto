<template>
  <div class="wrapper">

    <nav-bar></nav-bar>

    <div class="main-panel">

      <header-bar></header-bar>

      <div class="content">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>

      <footer class="footer">
        <div class="container-fluid">
          <nav class="pull-left">
            <ul>

              <li>
                <a href="http://www.creative-tim.com">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                  Blog
                </a>
              </li>
              <li>
                <a href="http://www.creative-tim.com/license">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright pull-right">
            &copy;
          </div>
        </div>
      </footer>

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
