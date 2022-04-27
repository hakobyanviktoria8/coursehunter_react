import React from 'react'
import "./../styles/CardsList.scss"
import Card from './Card'

function CardsList() {
  return (
    <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <div className='directory-menu'>
            <Card title="HATS"/>
            <Card title="JACKETS"/>
            <Card title="SHOES"/>
            <Card title="WOMENS"/>
            <Card title="MENS"/>
        </div>
    </div>
  )
}

export default CardsList