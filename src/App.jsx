import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Component } from 'react';
import Fade from 'react-reveal/Fade';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentQuote: '',
      currentAuthor: ''
    };

    this.slideShow = this.slideShow.bind(this);
    
  }
  

  componentDidMount(){
    console.log('it ran')
    const BASE_URL = window.location.origin;
    fetch("http://localhost:3030/quotes", {mode:'cors'})
    .then(res => res.json())
    .then(
      (result) => {
        console.log("This is the result", result);
        this.slideShow(result);
      }
    )
  }

  slideShow(result){
    let numQuotes = result.length;
    let index = 0;
    this.setState({    
      currentQuote: `${result[index].quote}`,
      currentAuthor: `${result[index].author}`
    })

    setInterval(() => {
      this.setState({    
        currentQuote: `${result[index].quote}`,
        currentAuthor: `${result[index].author}`
      })      
      index = (index + 1) % numQuotes;
    }, 5000);
  }

  render() {
    return(
    <div className="App">
      <Header/>
      <Home
        quote={this.state.currentQuote}
        author={this.state.currentAuthor}
      />
    </div>
    )};
}

