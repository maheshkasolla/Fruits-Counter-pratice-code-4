import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  onIncrementMango = () => {
    this.setState(prevFruit => ({mango: prevFruit.mango + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevFruit => ({banana: prevFruit.banana + 1}))
  }

  render() {
    const {banana, mango} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="countColour">{mango}</span> mangoes{' '}
            <span className="countColour">{banana} </span>bananas
            <div className="fruit-container">
              <div className="card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                  className="img-size"
                />
                <br />
                <button
                  type="button"
                  className="button"
                  onClick={this.onIncrementMango}
                >
                  Eat Mango
                </button>
              </div>
              <div className="card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                  className="img-size"
                />
                <br />
                <button
                  type="button"
                  className="button"
                  onClick={this.onIncrementBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </h1>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
