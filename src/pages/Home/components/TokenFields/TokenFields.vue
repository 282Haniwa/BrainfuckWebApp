<template>
  <div class="token-definition-wrapper">
    <v-text-field
      class="token-definition"
      :label="key"
      :key="key"
      :value="tokens[key]"
      @input="value => updateTokens(key, value)"
      v-for="key in Object.keys(tokens)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actions } from 'src/store'

export default {
  computed: {
    ...mapState({
      tokens: state => state.tokens
    })
  },
  methods: {
    updateTokens(key, value) {
      this.$store.dispatch(actions.SET_TOKENS, { ...this.$store.state.tokens, [key]: value })
    }
  }
}
</script>


<style>
.token-definition-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.token-definition {
  width: 23%;
  flex-grow: 0;
}

.token-definition input {
  font-family: Monaco, Consolas, Courier New, monospace;
}
</style>

