import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';
import Score from './Score.js';

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }*/
  // state as a Class field means we can avoid defining it in the constructor
  state = {
    numQuestions: 0,
    numCorrect: 0
  };
  /*handleButtonClick(e) {
    // this form means we need to bind 'this' in constructor
    console.log('e.target', e.target.innerText);
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1
    }))
  }*/
  handleButtonClick = isCorrect => {
    // this form doesn't require us to bind 'this' in constructor
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
      numCorrect: isCorrect ? currState.numCorrect + 1 : currState.numCorrect
    }));
  };
  // this form allows us to avoid using arrow functions & .bind()
  //   in render() when creating lists with .map() (see below...)
  // It is unnecessary here since we are not mapping over multiple <Game />s
  renderGame = game => <Game onButtonClick={this.handleButtonClick} />;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise - Managing State</p>
        </header>
        <main className="App-main">
          {/*
            // These cause unnecessary re-render of Game components
            <Game onButtonClick={(e) => this.handleButtonClick(e)} />
            <Game onButtonClick={this.handleButtonClick.bind(this)} />
            */}
          <Game onButtonClick={this.handleButtonClick} />
          {this.renderGame()}
          <Score
            numQuestions={this.state.numQuestions}
            numCorrect={this.state.numCorrect}
          />
        </main>
      </div>
    );
  }
}

export default App;