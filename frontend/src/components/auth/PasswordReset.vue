<template>
  <div class="center-notification">
    <div class="notification is-registration-notification">
      <br>
      <h2 class="title is-3">Please Update Your Password</h2>
      <div class="field control">
        <label class="label has-text-centered">
          <span class="is-4">{{ user.username }}</span>
        </label>
        <input class="input" type="hidden" v-model="user.username">
      </div>
      <div class="field control">
        <label class="label">Password</label>
        <input class="input" type="text" v-model="user.password">
      </div>
      <div class="field control">
        <label class="label">Password (please confirm)</label>
        <input class="input" type="text">
      </div>
      <a href="#" class="button is-info" @click.prevent="resetPassword">Update Password</a>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import router from '../../router/index';

  export default {
    name: 'confirm',
    data() {
      return {
        token: null,
        user: {
          username: '',
          password: '',
        },
      };
    },
    created() {
      this.checkToken();
    },
    methods: {
      checkToken() {
        this.token = this.$route.query.token;
        this.user.username = this.$route.query.username;
        if (
          this.token === null ||
          this.token === '' ||
          this.token === undefined
        ) {
          router.push('/login');
        }
      },
      resetPassword() {
        axios.create();
        const url = 'http://127.0.0.1:5000/auth/password/update';
        axios.post(url, { user: this.user }, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
          .then(() => {
            router.push('/login');
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