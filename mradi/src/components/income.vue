<template>
<div class="container">
  <h3 class="mb-5">YOUR INCOME</H3>
  <div class="row">
    <div class="col-sm">
      <select class="custom-select" id="inputGroupSelect01">
        <option value="" selected disabled>Income Source</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-sm">
      <select class="custom-select" id="inputGroupSelect01">
        <option value="" selected disabled>Currency</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-sm">
      <select class="custom-select" id="inputGroupSelect01">
        <option value="" selected disabled>Time Period</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-sm">
      <select class="custom-select" id="inputGroupSelect01">
        <option value="" selected disabled>Amount</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
  <div>
  <router-link to="/expenses">
      <button type="button" class="btn btn-warning btn-lg mt-5">NEXT</button>
  </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'income',
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  select option { color: black; }
  select option:first-child { color: grey; }
  select.empty { color: grey; }
  /* Hidden placeholder */
  select option[disabled]:first-child { display: none; }
</style>
