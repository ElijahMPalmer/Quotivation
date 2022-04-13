import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Component, useEffect, useState } from "react";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: "ourChoice",
      currentQuotesArr: [],
      currentQuote: "",
      currentAuthor: "",
      timerID: NaN,
    };

    this.slideShow = this.slideShow.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.getQuotes = this.getQuotes.bind(this);
  }

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes() {
    const baseURL = window.location.origin;
    switch (this.state.currentCategory) {
      case "ourChoice":
        console.log("made it to choice");
        fetch(`${baseURL}/quotes`, { mode: "cors" })
          .then((res) => res.json())
          .then((result) => {
            //console.log("This is the result", result);
            this.setState(
              {
                currentQuotesArr: result,
              },
              () => {
                //console.log("This is the Quotes ARR", this.state.currentQuotesArr)
              }
            );
            this.slideShow();
          });
        break;
      case "prog":
        console.log("made it to prog");
        fetch("https://programming-quotes-api.herokuapp.com/quotes", {
          mode: "cors",
        })
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              currentQuotesArr: result,
            });
            this.slideShow();
          });

        break;
    }
  }

  slideShow() {
    if (this.state.timerID !== NaN) {
      clearInterval(this.state.timerID);
    }
    let result = this.state.currentQuotesArr;
    let numQuotes = result.length;
    let index = 0;
    let quote = "";

    switch (this.state.currentCategory) {
      case "ourChoice":
        quote = result[index].quote;
        break;
      case "prog":
        quote = result[index].en;
        break;
    }

    this.setState({
      currentQuote: quote,
      currentAuthor: `${result[index].author}`,
    });
    
    index++;
    let timer = setInterval(() => {
      this.setState({
        timerID: timer,
      });
      switch (this.state.currentCategory) {
        case "ourChoice":
          quote = result[index].quote;
          break;
        case "prog":
          quote = result[index].en;
          break;
      }
      this.setState(
        {
          currentQuote: quote,
          currentAuthor: `${result[index].author}`,
        },
        () => {
          console.log(
            "Interval",
            this.state.currentQuote,
            this.state.currentAuthor
          );
        }
      );
      index = (index + 1) % numQuotes;
    }, 3000);
  }

  changeCategory(category) {
    console.log("Changing");
    this.setState({ currentCategory: category }, () => {
      console.log("Current Category", this.state.currentCategory);
      this.getQuotes();
    });
  }

  render() {
    return (
      <div className="App">
        <Header changeCategory={this.changeCategory} />
        <Home
          quote={this.state.currentQuote}
          author={this.state.currentAuthor}
        />
      </div>
    );
  }
}
