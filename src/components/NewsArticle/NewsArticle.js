import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({
  id, 
  headline, 
  img, 
  description, 
  url
}) => {

  return (
    <section id={id} className="news-article">
      <h2 className="article-header">{headline}</h2>
      <img src={img} className="article-img" alt="News article"></img>
      <p className="article-description" >{description}</p>
      <a href={url} className="article-link" >VIEW THE LINK =></a>
    </section>
  );
}

export default NewsArticle;