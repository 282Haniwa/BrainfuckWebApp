import Scanner from 'src/brainfuck/Scanner'
import SemanticAnalyzer from 'src/brainfuck/SemanticAnalyzer'
import defaultTokens from 'src/brainfuck/tokens'

class Brainfuck {
  constructor(tokens = defaultTokens) {
    this.tokenDefinition = tokens
    this._scanner = new Scanner(tokens)
  }

  setTokentokenDefinition(tokenDefinition) {
    this.tokenDefinition = tokenDefinition
  }

  static evaluate(program) {
    const aBrainfuck = new Brainfuck()
    return aBrainfuck.evaluate(program)
  }

  evaluate(program) {
    const tokenArray = this._scanner.scanToken(program)
    return SemanticAnalyzer.evaluate(tokenArray)
  }
}

export default Brainfuck
