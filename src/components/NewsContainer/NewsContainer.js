import './NewsContainer.css'
import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({newsInfo}) => {

  let displayLocal = (newsInfo) => {
    if (!newsInfo.length) {
      return <h1>There was no search returned please re-choose a category</h1>
    }
     return newsInfo.map(localData => {
      return (
        <NewsArticle 
        id={localData.id}
        key={localData.id}
        headline={localData.headline}
        img={localData.img}
        description={localData.description}
        url={localData.url}
        />
        );
    })
  }
  

  return (
    <section className="news-container">
      <div className="news-display">
      {displayLocal(newsInfo)}
      </div>
    </section>
  );
}

export default NewsContainer