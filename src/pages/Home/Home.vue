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
    <div class="btn-wrapper">
      <v-btn
        color="success"
        @click="runProgram"
      >
        Run
      </v-btn>
      <v-btn
        color="error"
        @click="clearResult"
      >
        Clear
      </v-btn>
    </div>
    <v-snackbar
      top
      color="success"
      v-model="snackbar"
      :timeout="1500"
    >
      Run success!
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actions } from 'src/store'
import TokenDefinition from './components/TokenDefinition'

export default {
  data() {
    return {
      snackbar: false
    }
  },
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
      this.snackbar = true
    },
    clearResult() {
      this.$store.dispatch(actions.CLEAR_RESULT)
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

.btn-wrapper {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
}
</style>
