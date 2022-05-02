import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase_shops_config'
import "./../styles/Shops.scss"

function Shop() {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [count,setCount] = useState("")
    const [shops,setSops] = useState([])
    const shopColectionRef = collection(db,"shops")

    const createShop = async (e) => {
        e.preventDefault()
        await addDoc(shopColectionRef,{name, price, count})
    }
    
    useEffect(()=>{
        const getShops = async()=>{
            const data = await getDocs(shopColectionRef)
            // console.log(data.docs)
            setSops(data.docs.map(doc=>({...doc.data(), id: doc.id})))
        }
        getShops()
    },[])

  return (
    <div  className="shopLists">
        <h1>Shops page</h1>
        <div className='addShopCard'>
            <h2>Add new shop</h2>
            <form onSubmit={createShop}>
                Name: <input onChange={e=>setName(e.target.value)} type="text" placeholder="Shop name"/>
                Price: <input onChange={e=>setPrice(e.target.value)} type="number" placeholder="Shop price"/>
                Count: <input onChange={e=>setCount(e.target.value)} type="number" placeholder="Shop count"/>
                <input type="submit" placeholder="Add Shop"/>
            </form>
        </div>
        <div className="shopCardWrapper">
            {shops.map(shop=>
                <div key={shop.id} className="shopCard">
                    <h2>{shop.name.toUpperCase()}</h2>
                    <hr/>
                    <p>Price: {shop.price}</p>
                    <p>Count: {shop.count}</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default Shop