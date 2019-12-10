<template>

  <div class="container" id="app">

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
       <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/About-Us" class="nav-link">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item ">
          <router-link to="" class="nav-link">register</router-link>
            <li class="nav-item">
            <router-link to="/child" class="nav-link">children</router-link>
            </li>
            <li class="nav-item">
          <router-link to="/register" class="nav-link">staff register</router-link>
        </li>
        
        
        
      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
  
</template>


<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

