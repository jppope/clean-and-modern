<template>
  <div>
    <div class="center-notification" >
      <div class="notification is-registration-notification">
        <button class="delete" @click.prevent="authAspect('login')"></button>
        <br>
        <h2 class="title is-4 has-text-centered">Sorry You're having problems...</h2>
        <ul>
          <li>Click here for Our <a href=""> Documentation.</a></li>
          <li>Click here to <a href="">Watch Videos.</a></li>
          <li>Click here to <a href="">Contact a Human.</a></li>
        </ul>
        <br>
        <label class="label is-small">Reset your Password?</label>
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="email" v-model="user.username">
          </div>
          <div class="control">
            <a class="button is-info" @click.prevent="sendResetEmail">
              Reset Password
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import router from '../../router/index';

  export default {
    props: ['showHelp'],
    name: 'HelpNotification',
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      closeNotification() {
        this.$emit('closeIt');
      },
      authAspect(authComponent) {
        this.$emit('authComponent', authComponent);
      },
      sendResetEmail() {
        const user = JSON.parse(JSON.stringify(this.user));
        axios.post('http://127.0.0.1:5000/auth/reset', { user })
          .then((response) => {
            const confirmation = JSON.parse(JSON.stringify(response.data));
            if (confirmation.message === 'confirmed') {
              router.push('/login');
            }
            this.$emit('authComponent', 'login');
          });
      },
    },
  };
</script>
<style>
  .center-notification {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
  }
  .is-registration-notification {
    align-self: flex-start;
    max-width: 50%;
    z-index: 10;
  }
  .delete {
    margin: 1rem;
  }
</style>