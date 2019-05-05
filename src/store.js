import Vue from 'vue'
import Vuex from 'vuex'
import Brainfuck from 'src/brainfuck/Brainfuck'
import defaultTokens from 'src/brainfuck/tokens'

export const actions = {
  SET_TOKENS  : 'SET_TOKENS',
  SET_PROGRAM : 'SET_PROGRAM',
  RUN_PROGRAM : 'RUN_PROGRAM'
}

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tokens: defaultTokens,
    program: '',
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
    }
  },
  actions: {
    [actions.SET_TOKENS](context, tokens) {
      return context.commit('setTokens', tokens)
    },
    [actions.SET_PROGRAM](context, program) {
      return context.commit('setProgram', program)
    },
    [actions.RUN_PROGRAM](context) {
      return new Promise((resolve) => {
        const aBrainfuck = new Brainfuck(context.state.tokens)
        const result = aBrainfuck.evaluate(context.state.program)
        resolve(context.commit('setResult', result))
      })
    }
  }
})

export default store
