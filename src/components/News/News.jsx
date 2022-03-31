import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './News.css'

const News = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState({});
  const navigate = useNavigate();
  const getPosts = async () => 
  {
    setLoading(true);
    await fetch("https://realpixelstudios.herokuapp.com/posts").then(res => res.json()).then((result) => setNews(result.reverse().find(e => e.visible)));
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='newsContainer'>
        <h1>LATEST NEWS ON FOUR</h1> 
        <div className='newsPosts'>
          { 
            loading || news == null ? null :
            <div className='newsPost'>
              <div className='newsImage'></div>
              <span className='newsText'>
                  <h1>{news.title}</h1>
                  <p>{news.summary}</p>
                  <button onClick={()=> {navigate(`/news/${news.id}`)}}>Read More</button>
              </span>
            </div>
          }
        </div>
    </div>
  )
}

export default News