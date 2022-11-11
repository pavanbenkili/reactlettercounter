// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {enteredInput: ''}

  onChangeInput = event => {
    this.setState({enteredInput: event.target.value})
  }

  render() {
    const {enteredInput} = this.state
    console.log(enteredInput)
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="text">Calculate the Letters you enter</h1>
          <label htmlFor="enterInput">Enter the phrases</label> <br />
          <input
            type="text"
            id="enterInput"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
            className="input-bar"
          />
          <p className="result-box">
            No.of letters: <span>{enteredInput.length}</span>
          </p>
        </div>

        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
