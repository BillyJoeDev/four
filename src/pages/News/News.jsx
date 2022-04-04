import React, { useEffect, useState } from 'react'
import Link from 'react-scroll/modules/components/Link'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './News.css'

const News = () => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);

    const getPost = async () => 
    {
      setLoading(true);
      await fetch("https://realpixelstudios.herokuapp.com/posts/visible").then(res => res.json()).then((result) => setNews(result));
      setLoading(false);
    };
  
    useEffect(() => {
      getPost();
    }, []);

    return (
        <div className='news-page-wrapper'>
            <Navbar navClass='newsNavbar' />
            <div className='news-page-posts'>
                {
                    loading ? null : 
                    news.map(news => (
                        <a className='news-page-post' href={'/news/' + news.id}>
                            <img src={news.headerimg} />
                            <div className='news-page-post-header'>
                                <h1>{news.title}</h1>
                                <p>{news.summary}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
            <Footer className='default' />
        </div>
    )
}

export default News