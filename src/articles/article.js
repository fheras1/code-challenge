import React from 'react';
import { Link } from 'react-router-dom';
import './article.css';

const Article = (props) => (
  <article className="Card">
    <div className="Card-text">
      {props.excerpt}
    </div>
    <div className="Card-meta">
    <Link to={props.id}>More...</Link>
    </div>
  </article>
);
 export default Article;