<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="item">
      Spottery
    </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">
          Albums
        </router-link>
        <a @click="logout" class="item">
          Logout
        </a>
      </div>
      <a v-else @click="login"
      class="item">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedIn'])
}
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>