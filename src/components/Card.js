import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({title,img}) {
  return (
    <div className='menu-item'>
        <div className='bgImg' style={{backgroundImage: `url(${img})`}}/>
        <Link to={`/${title}`}>
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </Link>
    </div>
  )
}
