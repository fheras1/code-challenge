import React from 'react';
import Article from './article';
 import './articleList.css';
 const ArticleList = (props) => (
  <div className="CardList">
    {
      props.articles.map(article => (
        <Article
          key={article.id}
          {...article}
        />
      ))
    }
  </div>
);
 export default ArticleList;