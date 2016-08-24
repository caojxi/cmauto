<template>
  <div class="header">
    <h4 class="title">{{ title }}</h4>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    props: ['title'],

    created() {
      $('#page-header').text(this.title)
    }
  }
</script>
