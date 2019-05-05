<template>
  <div class="content">
    <token-definition />
    <div class="code-wrapper">
      <v-textarea
        auto-grow
        box
        class="text-area"
        name="code"
        label="Code"
        placeholder="Write Brainfuck code here!"
        :value="program"
        @input="updateProgram"
      />
      <v-textarea
        auto-grow
        readonly
        box
        class="text-area"
        name="result"
        label="Result"
        placeholder="Run it!"
        :value="result"
      />
    </div>
    <v-btn
      color="success"
      @click="runProgram"
    >
      Run
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actions } from 'src/store'
import TokenDefinition from './components/TokenDefinition'

export default {
  computed: {
    ...mapState({
      program: state => state.program,
      result: state => state.result
    })
  },
  methods: {
    updateProgram(value) {
      this.$store.dispatch(actions.SET_PROGRAM, value)
    },
    runProgram() {
      this.$store.dispatch(actions.RUN_PROGRAM)
    }
  },
  components: {
    TokenDefinition
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

.code-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 32px;
}

.text-area {
  width: 48%;
  flex-grow: 0;
}

.text-area textarea {
  font-family: Monaco, Consolas, Courier New, monospace;
}
</style>
