<template>
  <nav class="navbar has-shadow" style="border-bottom: 1px solid rgba(0,0,0,0.2) ">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://jonpauluritis.com">
        Branding
      </a>
      
      <a class="navbar-item is-hidden-desktop" href="" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-github"></i>
        </span>
      </a>

      <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jppope" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-twitter"></i>
        </span>
      </a>

      <div class="navbar-burger burger" data-target="navMenuExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="button is-primary" to="login" v-show="isLoggedIn" @click="logout">
            <span class="icon"><i class="fa fa-user"></i></span>
            <span>Log Out!!!</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'navigation',
    computed: {
      ...mapGetters(['isLoggedIn']),
    },
    methods: {
      ...mapActions(['logout']),
    },
  };
</script>