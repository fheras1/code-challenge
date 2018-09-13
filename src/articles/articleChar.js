import React, { Component } from 'react';

class ArticleChar extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    }
  }
   // lifecycle
  componentWillMount() {
  }
   // renders
  render() {
    return (
      <article>
        {this.props.match.params.id}
      </article>
    )
  }
}
 export default ArticleChar;