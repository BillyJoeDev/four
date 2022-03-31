import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Parse from 'html-react-parser'
import './NewsPost.css'
import Footer from '../Footer/Footer'

const NewsPost = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState({});

    const getPost = async () => 
    {
      setLoading(true);
      await fetch(`https://realpixelstudios.herokuapp.com/posts`).then(res => res.json()).then((result) => setNews(result.find(e => e.id == id)));
      setLoading(false);
    };
  
    useEffect(() => {
      getPost();
    }, []);

    return (
        loading ? null :
        <div className="news-post-wrapper" id='news'>
            <Navbar navClass='newsNavbar' />
            <div className="news-post-header-wrapper">
                <div className="news-post-header-image"></div>
                <div className="news-post-header">
                    <h1>{news.title}</h1>
                    <p>{news.summary}</p>
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                </div>
            </div>
            
            {
                news.sections.map(section => {
                    return(
                        <div className="news-post-section-wrapper">
                            <div className="news-post-section-image-wrapper">
                                <div className="news-post-section-image" />
                                <div className="news-post-section-overlay" />
                            </div>
                            <div className="news-post-section-content">
                                <div className="news-post-section-header">
                                    <h1>{section.title}</h1>
                                    {!section.author ? null : <p>by <strong>{section.author}</strong></p>}
                                </div>
                                <div className="news-post-section-body">
                                    {Parse(section.body)}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <Footer />
        </div>
    )
}

export default NewsPost