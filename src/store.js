import Vue from 'vue'
import Vuex from 'vuex'
import Brainfuck from 'src/brainfuck/Brainfuck'
import defaultTokens from 'src/brainfuck/tokens'

export const actions = {
  SET_TOKENS  : 'SET_TOKENS',
  SET_PROGRAM : 'SET_PROGRAM',
  RUN_PROGRAM : 'RUN_PROGRAM',
  CLEAR_RESULT: 'CLEAR_RESULT'
}

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tokens: defaultTokens,
    program: '+++++++++[>++++++++>+++++++++++>+++>+<<<<-]>.>++.+++++++..+++.\n>+++++.<<+++++++++++++++.>.+++.------.--------.>+.>+.',
    result: ''
  },
  mutations: {
    setTokens(state, tokens) {
      state.tokens = tokens
    },
    setProgram(state, program) {
      state.program = program
    },
    setResult(state, result) {
      state.result = result
    },
    clearResult(state) {
      state.result = ''
    }
  },
  actions: {
    [actions.SET_TOKENS](context, tokens) {
      context.commit('setTokens', tokens)
    },
    [actions.SET_PROGRAM](context, program) {
      context.commit('setProgram', program)
    },
    [actions.RUN_PROGRAM](context) {
      const aBrainfuck = new Brainfuck(context.state.tokens)
      const result = aBrainfuck.evaluate(context.state.program)
      context.commit('setResult', result)
    },
    [actions.CLEAR_RESULT](context) {
      context.commit('clearResult')
    }
  }
})

export default store
