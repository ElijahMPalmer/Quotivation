import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home
        title={'This is a quote'}
        description={'This is an author'}
      />
    </div>
  );
}

export default App;
