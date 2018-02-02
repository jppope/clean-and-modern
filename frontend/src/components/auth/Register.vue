<template>
  <div>
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <div class="card">
          <header class="card-header is-info">
            <p class="card-header-title has-centered-text">
              Register an Account
            </p>
            <button class="delete is-pulled-right" @click.prevent="authAspect('login')"></button>
          </header>
          <div class="card-content">
            <div class="field">
              <label class="label">Email</label>
              <p class="control">
                <input class="input" type="text" placeholder="John Smith" v-model="user.username">
              </p>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <p class="control">
                <input class="input" type="password" placeholder="●●●●●●●" v-model="user.password">
              </p>
            </div>
            <div class="field">
              <label class="label">Confirm Password</label>
              <p class="control">
                <input class="input" type="password" placeholder="●●●●●●●" v-model="confirm">
              </p>
            </div>
            <br>
            <p class="has-text-centered" @click.prevent="authAspect('help')">
              <a href="#">Need help?</a>
            </p>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item" @click.prevent="register">
              <span>
                Register
              </span>
            </a>
            <p class="card-footer-item">
              <a href="#" @click.prevent="authAspect('login')">
                <span>
                  Cancel
                </span>
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    props: ['showRegister'],
    name: 'registration',
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
        confirm: '',
      };
    },
    methods: {
      register() {
        const user = JSON.parse(JSON.stringify(this.user));
        axios.post('http://127.0.0.1:5000/users', { user })
          .then((response) => {
            localStorage.setItem('user', response.data);
            this.$emit('authComponent', 'thanks');
          });
      },
      authAspect(authComponent) {
        this.$emit('authComponent', authComponent);
      },
    },
  };
</script>
<style>
  .delete{
    margin: 0.6rem;
  }
</style>