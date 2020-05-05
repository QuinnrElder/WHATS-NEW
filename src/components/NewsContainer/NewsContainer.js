import './NewsContainer.css'
import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {

  let displayLocal = (local) => {
     return local.map(localData => {
      return (
        <NewsArticle 
        id={localData.id}
        headLine={localData.headLine}
        img={localData.img}
        description={localData.description}
        url={localData.url}
        />
        );
    })
  }
  

  return (
    <section className="news-container">
      {displayLocal(props.newsInfo.local)}
    </section>
  );
}

export default NewsContainer