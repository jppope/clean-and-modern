<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-half">
            <div class="card">
              <header class="card-header is-info">
                <p class="card-header-title has-centered-text">
                  Welcome Back!
                </p>
              </header>
              <div class="card-content">
                <div class="field">
                  <label class="label">Email Address</label>
                  <p class="control">
                    <input class="input" type="text" placeholder="username@something.org" v-model="user.username">
                  </p>
                </div>
                <div class="field">
                  <label class="label">
                    Password
                  </label>
                  <p class="control">
                    <input class="input" type="password" placeholder="●●●●●●●" v-model="user.password">
                  </p>
                </div>
                <br>
                <p class="has-text-centered">
                  <a href="#" @click.prevent="authAspect('help')">Need help/ Forgot Password?</a><br>
                </p>
              </div>
              <footer class="card-footer">
                <a class="card-footer-item" @click.prevent="submitLogin">
                  <span>
                    Login
                  </span>
                </a>
                <a class="card-footer-item" @click.prevent="authAspect('register')">
                  <span>
                    Register
                  </span>
                </a>
              </footer>
            </div>
          </div><!-- /end column -->
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      ...mapActions(['login']),
      submitLogin() {
        this.$store.dispatch('login', JSON.parse(JSON.stringify(this.user)));
      },
      authAspect(authComponent) {
        this.$emit('authComponent', authComponent);
      },
    },
  };
</script>