import React, { Component } from 'react';
import request from '../request';
import { ARTICLE_QUERY } from '../queries';
import './articleChar.css';

class ArticleChar extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }
   // lifecycle
  componentWillMount() {
    request(ARTICLE_QUERY(this.props.match.params.id)).then(response => {
      this.setState({ article: response.data.article });
    });
  }
   // renders
  render() {
    const { author, content, tags } = this.state.article;
    console.log(this.state.article);
    return (
      <article className="ArticleChar">
        <div className="ArticleChar-author">
          <span>By {author}</span>
        </div>
        <aside className="ArticleChar-tagList">
          {
            tags ? tags.map(tag => <span className="ArticleChar-tag">{tag}</span>) : <span></span>
          }
        </aside>
        <div className="ArticleChar-text">
          {content}
        </div>
      </article>
    );
  }
}
export default ArticleChar;
