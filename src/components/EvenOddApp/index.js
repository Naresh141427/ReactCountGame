import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => ({
      count: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    let valueType
    if (count % 2 === 0) {
      valueType = 'Even'
    } else {
      valueType = 'Odd'
    }
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="header">Count {count}</h1>
          <p className="count-description">Count is {valueType}</p>
          <button type="button" className="button" onClick={this.onIncreament}>
            Increment
          </button>
          <p className="note">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
