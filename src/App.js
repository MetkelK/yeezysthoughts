import React from 'react';
import './App.css';
import QuotePage from './components/QuotePage';
import Home from './components/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


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
    return (
        <Router>
            <Switch>
                <Route path="/quotes">
                    <div className="App">
                        <div className="quote_container container">
                            <QuotePage quote={this.state} handleClick={this.handleClick}/>
                        </div>
                    </div>
                </Route>
                <Route path="/">
                    <div className="App">
                        <div className="container">
                            <Home />
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}
}

export default App;
