import './NewsContainer.css'
import React from 'react';
import NewsArticle from './NewsArticle'

const NewsContainer = (props) => {

  let displayEntertainment = () => {

    return (
    <NewsArticle />
    );
  }
  let health
  let local
  let science
  let technology

  return (
    <section className="news-container">
      <section></section>
    </section>
  );
}

export default NewsContainer