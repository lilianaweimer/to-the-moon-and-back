import React from 'react';
import './Weather.css';

function Weather({ article }) {

  const showDate = () => {
    if (article.published_date) {
      let date = new Date(Date.parse(article.published_date));
      var dd = String(date.getDate()).padStart(2, "0");
      var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = date.getFullYear();
      date = mm + "/" + dd + "/" + yyyy;
      return date;
    }
  }

  const btnClick = () => {
    window.open(article.url)
  }

  return (
    <article className='weather'>
      <p className='recent-news'>Recent Space News:</p>
      <img className='news-image' src={article.featured_image} alt={article.title}/>
      <div className='news-title'>
        <h3>{article.title}</h3>
        <p className='news-date'>{showDate()}</p>
      </div>
      <button onClick={btnClick} className='news-btn'>Learn More</button>
    </article>
  )
}

export default Weather;