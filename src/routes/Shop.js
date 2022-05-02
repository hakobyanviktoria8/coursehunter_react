import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebase_shops_config'
import "./../styles/Shops.scss"

function Shop() {
    const [shopData,setShopData] = useState({})

    // get data in firebase
    const [shops, setShops] = useState([])
    const shopColectionRef = collection(db,"shops")

    const handleChange =(e) =>{
        const {name, value} = e.target
        setShopData({
            ...shopData,
            [name]: value
        })
    }

    // add data in firebase
    const createShop = async (e) => {
        e.preventDefault()
        console.log(shopData)
        await addDoc(shopColectionRef, shopData)
    }

    // edit data inside firebase
    const incrShopData = async (id, count=0) => {
        const shopDoc = doc(db,"shops", id)
        // console.log(id, count)
        const newShopData = {count: +count + 1}
        await updateDoc(shopDoc, newShopData)
    }

    const decShopData =async (id,count=0) => {
        const shopDoc = doc(db,"shops", id)
        const newShopData = {count: +count - 1}
        await updateDoc(shopDoc, newShopData)
    }

    // delete shop card
    const handleDelete = async (id) =>{
        const shopDoc = doc(db,"shops", id)
        await deleteDoc(shopDoc)
        console.log(id, shops)
    }

    useEffect(()=>{
        const getShops = async()=>{
            const data = await getDocs(shopColectionRef)
            // console.log(data.docs)
            setShops(data.docs.map(doc=>({...doc.data(), id: doc.id})))
        }
        getShops()
    },[])

  return (
    <div  className="shopLists">
        <h1>Shops page</h1>
        <div className='addShopCard'>
            <h2>Add new shop</h2>
            <form onSubmit={createShop}>
                Name: <input name="name" onChange={handleChange} type="text" placeholder="Shop name"/>
                Price: <input name="price" onChange={handleChange} type="number" placeholder="Shop price"/>
                Count: <input name="count" onChange={handleChange} type="number" placeholder="Shop count"/>
                <input type="submit" placeholder="Add Shop"/>
            </form>
        </div>
        <div className="shopCardWrapper">
            {shops.map(shop=>
                <div key={shop.id} className="shopCard">
                    <h2>{shop?.name?.toUpperCase() || "Name here".toUpperCase()}</h2>
                    <button className="shopCardDelete" onClick={()=>{handleDelete(shop.id)}}>x</button>
                    <hr/>
                    <p>Price: {shop.price}</p>
                    <div className='countWrapper'>
                        <button onClick={()=>decShopData(shop.id, shop.count)}> - </button>
                        <p>Count: {shop.count}</p>
                        <button onClick={()=>incrShopData(shop.id, shop.count)}> + </button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Shop