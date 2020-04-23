<template>
  <div id="app" class="container-fluid">
     <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Africa's Pocket Budgeting tool</h1>
          <p class="lead">Budgeting Tool
            Set goals, build a budget and track it so you can stick to it.</p>
        </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
