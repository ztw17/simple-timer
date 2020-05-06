import React, { Component} from 'react';
import './App.css';

class Timer extends Component {
  constructor(props) {
      super(props)
      this.state = {
          count: 0,
          startCount: '100'
      }
  }

  render() {
    const {count} = this.state
    return (
      <div className="App">
          <h1>Time Remaining: {count}</h1>
          <button onClick={this.handlePause}>Pause</button>
      </div>
      )
    }

    componentDidMount() {
    //   this.myInterval = setInterval( () => {
    //     this.setState({
    //       count: this.state.count + 1
    //     })
    // }, 1000)
    // const {startCount} = this.state.startCount
    this.setState({
      count: this.state.startCount
    })
    this.doIntervalChange()
  }

  doIntervalChange = () => {
    this.myInterval = setInterval( () => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  handlePause = () => {
    console.log("CLICKED")
  }
}

export default Timer
