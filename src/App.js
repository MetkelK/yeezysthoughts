import React from 'react';
import './App.css';
import QuoteBlock from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isLoading: false,
      quote: " "
    };
  }

componentDidMount() {
  this.getQuote();
}

handleClick = () => {
    this.getQuote();
    this.setState({ isLoading: true });
}

getQuote() {
  fetch("https://api.kanye.rest/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            isLoading: false,
            quote: result.quote
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            isLoading: false,
            error
          });
        }
      )
}

render() {
  const { quote, isLoaded, isLoading } = this.state;

  let quoteDisplay;

  if (!isLoaded) {
    quoteDisplay = <QuoteBlock quote={"Sorry, I can't think right now"}/>
  } else {
    quoteDisplay = <QuoteBlock quote={quote}/>
  }

  let loadingQuote;

  if (!isLoading) {
    loadingQuote = "Read My Thoughts";
  } else {
    loadingQuote = "Hold on I'm thinking";
  }

  return (
    <div className="App">
      <div className="container">
        <div className="quote">
          {quoteDisplay}
          <button 
          className="button" 
          onClick={this.handleClick}
          disabled={isLoading ? true : false}
          >
          {loadingQuote}
          </button>
        </div>
      </div>
    </div>
  );
}
}
export default App;
