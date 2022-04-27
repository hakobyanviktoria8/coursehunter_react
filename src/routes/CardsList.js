import React from 'react'
import "./../styles/CardsList.scss"
import Card from '../components/Card'

function CardsList() {
  return (
    <div className='homepage'>
        <h1>Welcome to my Cards list</h1>
        <div className='directory-menu'>
            <Card title="flowers"/>
            <Card title="toys"/>
            <Card title="shose"/>
            <Card title="womens"/>
            <Card title="mens"/>
        </div>
    </div>
  )
}

export default CardsList