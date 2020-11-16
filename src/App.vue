<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  overflow: scroll;
  overflow-y: hidden;
  }

  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
