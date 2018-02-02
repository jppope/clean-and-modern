<template>
  <div>
    <help v-if="show === 'help'" @authComponent="display"></help>
    <login v-if="show === 'login'" @authComponent="display"></login>
    <thanks v-if="show === 'thanks'" @authComponent="display"></thanks>
    <register v-if="show === 'register'" @authComponent="display"></register>
  </div>
</template>

<script>
/* eslint-disable */

// Axios Config info:
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import register from './Register';
import login from './Login';
import help from './Help';
import thanks from './ThankYou';

export default {
  name: 'Authentication',
  components: {
    help,
    login,
    thanks,
    register,
  },
  data() {
    return {
      show: 'login',
      showLogin: true,
      showRegister: false,
      showNotification: false,
      showHelp: false,
    };
  },
  methods: {
    display(authAspect){
      this.show = authAspect;
    },
  },
};
</script>

