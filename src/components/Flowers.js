import React from 'react'
import "./../styles/Flowers.scss"

const flowersList =[
    {
        id:1,
        name: "Flower 1",
        price: 10
    },
    {
        id:2,
        name: "Flower 2",
        price: 20
    },
    {
        id:3,
        name: "Flower 3",
        price: 15
    },
    {
        id:4,
        name: "Flower 4",
        price: 30
    },
    {
        id:5,
        name: "Flower 5",
        price: 15
    },
    {
        id:6,
        name: "Flower 6",
        price: 30
    }
]

function Flowers() {
  return (
    <div className='Flowers'>
        <h1>Flowers lists</h1>
        <div className='listWrapper'>
            {flowersList.map((item)=>(
                <div key={item.id} className="item">
                    <div style={{backgroundImage: `url(${require(`./../images/flower${item.id}.jpg`)})`}} className="bgImg">
                        <button className='addToCard'>Add to Card</button>
                    </div>
                    <div className='content'>
                        <h2>{item.name}</h2>   
                        <p>$ {item.price}</p>
                    </div>
                </div> 
            ))}
        </div>
    </div>
  )
}

export default Flowers