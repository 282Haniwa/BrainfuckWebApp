<template>
  <router-view />
</template>

<script>
export default {
  watch: {
    $route() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
