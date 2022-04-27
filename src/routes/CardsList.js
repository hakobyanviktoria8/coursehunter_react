import React from 'react'
import "./../styles/CardsList.scss"
import Card from '../components/Card'
import flowers from "./../images/flowers.jpg"
import toys from "./../images/toys.jpg"
import shoes from "./../images/shoes.jpg"
import womens from "./../images/womens.jpg"
import mens from "./../images/mens.jpg"

function CardsList() {
  return (
    <div className='homepage'>
        <h1>Welcome to my Cards list</h1>
        <div className='directory-menu'>
            <Card title="flowers" img={flowers}/>
            <Card title="toys"  img={toys}/>
            <Card title="shose"  img={shoes}/>
            <Card title="womens"  img={womens}/>
            <Card title="mens"  img={mens}/>
        </div>
    </div>
  )
}

export default CardsList