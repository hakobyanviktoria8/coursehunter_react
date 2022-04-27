import React from 'react'
import img from "./../images/img.jpg"

export default function Card({title}) {
  return (
    <div className='menu-item'>
        <div className='bgImg' style={{backgroundImage: `url(${img})`}}/>
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
  )
}
