<template>
  <v-app class="base-style">
    <app-bar />
    <v-content>
      <router-view class="content" />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar'
import AppFooter from '../components/AppFooter'

export default {
  components: {
    AppBar,
    AppFooter
  }
}
</script>

<style scoped>
.content {
  margin: 24px;
}
</style>
