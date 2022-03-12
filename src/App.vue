<template>
  <nav class='navbar navbar-expand-lg navbar-light bg-light'>
    <div class="d-flex justify-content-center col-12">    
      <router-link class="navbar-brand text-primary" to="/">Home</router-link> 
    <router-link class="navbar-brand text-primary"  to="/about">About</router-link>
    <router-link class="navbar-brand text-primary"  to="/login">Se connecter</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style >

</style>
