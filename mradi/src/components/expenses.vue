<template>
<div class="container">
  <h3 class="mb-5">YOUR EXPENSES</H3>
  <div class="row mb-3">
    <div class="col-sm-12">
    <div class="col-sm-3">
        1. What’s your living arrangement?
    </div>
    <div><button type="button" class="btn btn-outline-info">Rent free</button></div>
    <div><button type="button" class="btn btn-outline-info">Rent</button></div>
    <div><button type="button" class="btn btn-outline-info">Paying a mortgage</button></div>
    <div><button type="button" class="btn btn-outline-info">Own & Paid in full</button></div>
  </div>

  <div class="row mb-3">
    <div class="col-sm-3">
        2. Which modes of transport do you use?
    </div>
     <div><button type="button" class="btn btn-outline-info">Free</button></div>
    <div><button type="button" class="btn btn-outline-info">Public Transport</button></div>
    <div><button type="button" class="btn btn-outline-info">Own a car</button></div>
    <div><button type="button" class="btn btn-outline-info">Taxis</button></div>
  </div>

  <div class="row mb-3">
    <div class="col-sm-3">
        3. What’s your family situation?
    </div>
     <div><button type="button" class="btn btn-outline-info">Kids under 18</button></div>
    <div><button type="button" class="btn btn-outline-info">Kids over 18</button></div>
    <div><button type="button" class="btn btn-outline-info">Kds below 3</button></div>
    <div><button type="button" class="btn btn-outline-info">Other dependents</button></div>
  </div>

  <div class="row mb-3">
    <div class="col-sm-3">
       4. Do you have debt?
    </div>
     <div><button type="button" class="btn btn-outline-info">Mobile money</button></div>
    <div><button type="button" class="btn btn-outline-info">Mortgage</button></div>
    <div><button type="button" class="btn btn-outline-info">Car Loan</button></div>
    <div><button type="button" class="btn btn-outline-info">Student Loan</button></div>
    <div><button type="button" class="btn btn-outline-info">Hire purchase</button></div>
  </div>


  <router-link to="/">
      <button type="button" class="btn btn-warning btn-lg mt-5">NEXT</button>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'expenses',
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<style scoped>
</style>
