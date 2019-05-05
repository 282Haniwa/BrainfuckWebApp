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
        v-model="code"
      />
      <v-textarea
        auto-grow
        readonly
        box
        class="text-area"
        name="result"
        label="Result"
        placeholder="Run it!"
        v-model="result"
      />
    </div>
    <v-btn
      color="success"
      @click="callBrainfuck"
    >
      Run
    </v-btn>
  </div>
</template>

<script>
import Brainfuck from 'src/brainfuck/Brainfuck'
import tokenDefinition from 'src/brainfuck/tokens'
import TokenDefinition from './components/TokenDefinition'

export default {
  data() {
    return {
      tokenDefinition: tokenDefinition,
      code: '',
      result: ''
    }
  },
  methods: {
    callBrainfuck() {
      const aBrainfuck = new Brainfuck(this.tokenDefinition)
      this.result = aBrainfuck.evaluate(this.code)
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
