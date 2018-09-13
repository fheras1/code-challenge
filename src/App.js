import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import Header from './commons/header';
import Footer from './commons/footer';
import ArticleList from './articles/articleList';
import ArticleChar from './articles/articleChar';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
          <Route exact path="/" render={() => <ArticleList articles={this.state.articles} />} />
            <Route path="/:id" component={ArticleChar} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
