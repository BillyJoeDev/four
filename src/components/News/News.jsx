import React from 'react'
import './News.css'

const News = () => {
  return (
    <div className='newsContainer' id='news'>
        <h1>LATEST NEWS ON FOUR</h1> 
        <div className='newsPosts'>
            <div className='newsPost'>
                <div className='newsImage'></div>
                <div className='newsText'>
                    <h1>Devblog 0.1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit consequuntur natus sit expedita, eum a illum magni praesentium corrupti non adipisci odit vero repellendus.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News