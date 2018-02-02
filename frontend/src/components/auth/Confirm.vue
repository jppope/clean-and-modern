<template>
  <div class="center-notification">
    <div class="notification is-registration-notification" >
      <br>
      <h2 class="title is-3">Confirming Your Account Now</h2>
      <p class="has-text-centered">Hang Tight!</p>
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
        example: '',
      };
    },
    mounted() {
      this.confirm();
    },
    methods: {
      confirm() {
        const url = `http://127.0.0.1:5000/auth/confirm/${this.$route.query.token}`;
        axios.get(url)
          .then((response) => {
            const confirmation = JSON.parse(JSON.stringify(response.data));
            if (confirmation.message === 'confirmed') {
              router.push('/login');
            }
          });
      },
    },
  };
  // http://localhost:5000/auth/confirm/${}
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