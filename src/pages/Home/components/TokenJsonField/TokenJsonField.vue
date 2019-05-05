<template>
  <div class="token-definition-wrapper">
    <v-textarea
      class="token-json-definition"
      label="tokens"
      rows="10"
      :value="tokensString"
      @input="updateTokens"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actions } from 'src/store'

export default {
  data() {
    return {
      error: ''
    }
  },
  computed: {
    ...mapState({
      tokensString: state => JSON.stringify(state.tokens, null , "    ")
    })
  },
  methods: {
    updateTokens(value) {
      try {
        const json = JSON.parse(value)
        this.$store.dispatch(actions.SET_TOKENS, json)
      } catch (error) {
        /* eslint no-console: "off" */
        console.log(error)
      }
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

.token-json-definition {
  width: 100%;
}

.token-json-definition textarea {
  font-family: Monaco, Consolas, Courier New, monospace;
}
</style>
