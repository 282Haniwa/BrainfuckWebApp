<template>
  <v-toolbar
    app
    height="64px"
  >
    <v-toolbar-title class="headline">
      <span>Brainfuck</span>
    </v-toolbar-title>
    <v-spacer />
    <a
      class="github-link"
      href="https://github.com/282Haniwa" 
      target="_blank"
    >
      <img
        class="github-image"
        src="assets/GitHub-Mark-64px.png"
        alt="Github"
      >
    </a>
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

<style>
.github-link {
  height: 32px;
  width: 32px;
}

.github-image {
  height: 32px;
  width: 32px;
}
</style>
