<template>
  <div class="center-notification">
    <div class="notification is-registration-notification" >
      <button class="delete" @click.prevent="authAspect('login')"></button>
      <br>
      <h2 class="title is-3">Thanks For Registering!</h2>
      <p>You should receive an email confirmation shortly!</p>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      authAspect(authComponent) {
        this.$emit('authComponent', authComponent);
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