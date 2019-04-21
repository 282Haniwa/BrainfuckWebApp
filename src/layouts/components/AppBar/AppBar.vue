<template>
  <v-toolbar
    app
    height="64px"
  >
    <v-toolbar-title class="headline">
      <span>Brainfuck</span>
    </v-toolbar-title>
    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>
