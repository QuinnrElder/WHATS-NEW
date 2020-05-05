import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({
  id, 
  headLine, 
  img, 
  description, 
  url
}) => {

  return (
    <section id={id}>
      <h2>{headLine}</h2>
      <img src={img}></img>
      <p>{description}</p>
      <a href={url}></a>
    </section>
  );
}

export default NewsArticle;