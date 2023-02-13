import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: ''}

  NumberOfLetters = event => {
    const {value} = event.target
    this.setState({lettersCount: value})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="container">
        <div className="newContainer1">
          <div className="newContainer">
            <h1 className="heading">Calculate the Letters you entered </h1>

            <label htmlFor="label1" className="subheading">
              Enter the phrase
            </label>
            <br />
            <br />
            <div>
              <input
                id="label1"
                type="text"
                placeholder="Enter the phrase"
                className="text1"
                value={lettersCount}
                onChange={this.NumberOfLetters}
              />
            </div>

            <p className="btn button-1" type="button">
              {' '}
              No.of letters: 0{lettersCount.length}
            </p>
          </div>
          <div>
            <div className="imageContainer">
              <img
                className="image1"
                src=" https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
                alt="letters calculator"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
