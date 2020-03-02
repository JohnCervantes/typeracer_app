import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: [
        "the quick brown fox jump over the lazy wolf",
        "just random letters",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      ],
      minutes: 1,
      seconds: 0,
      disabled: false,
      score: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
          this.setState({ disabled: true });
          alert("Your final score is: " + this.state.score);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  handleChange(event) {
    let currentSentence = [...this.state.sentence];
    // console.log(event.target.value);
    if (currentSentence[0][0] === event.target.value.slice(-1)) {
      currentSentence[0] = currentSentence[0].replace(
        currentSentence[0][0],
        ""
      );
    } else {
      event.target.value = event.target.value.replace(
        event.target.value.slice(-1),
        ""
      );
    }
    this.setState({ sentence: currentSentence });
  }

  handleSubmit(event) {
    let score = this.state.score;
    if (this.state.sentence[0].length === 0) {
      let currentSentence = [...this.state.sentence];
      console.log(currentSentence);
      currentSentence.shift();
      this.setState({ sentence: currentSentence });
      this.setState({ score: score + 1 });
      console.log(this.state.sentence);
    } else {
      alert("Type the remaining letters!");
    }
    event.preventDefault();
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div className="App">
        <p>
          {minutes === 0 && seconds === 0 ? (
            <h1>Busted!!</h1>
          ) : (
            <h1>
              Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
        </p>
        <p>Score: {this.state.score}</p>
        <p>{this.state.sentence[0]}</p>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              //value=""
              onChange={this.handleChange}
              placeholder="Type here!"
              disabled={this.state.disabled}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
