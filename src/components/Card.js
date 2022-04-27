import React from 'react'
import { Link } from 'react-router-dom'
import img from "./../images/img.jpg"

export default function Card({title}) {
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
