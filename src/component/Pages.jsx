import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pages = () => {
  const [items , setItems] = useState([])
  const [isLoading, SetIsloading] = useState(true)
    useEffect(()=>{
        fetchAPI()
    },[])
    const fetchAPI = async()=>{
      const resp   = await axios.get("https://mxpertztestapi.onrender.com/api/sciencefiction")
      setItems(resp.data)
      console.log(resp.data);
      SetIsloading(false)
    }

  return (
    <div id='main' className='px-4 pt-20 rounded-tr-3xl rounded-tl-3xl  mt-20 bg-blue-900 min-h-screen  overflow-hidden'>
        {!isLoading ? 
        <div className=' m-auto justify-center ml-20' >
          {items.map((item,i)=>{
            return <div className='' key={i}>
        <div key={i} id="card" className=' bg-red-500 p-4 h-50 w-60 ml-5 text-center flex-col  mb-5 float-left rounded-3xl justify-between '>
        <img className='place-self-center' src={item.Image?.data} alt="not found" width={30} height={30} />
        {/* <img key={i} src=l̥l̥l̥AnJTzRX63_zmcihCIM9.webp" alt="not found" /> */}
        <h3 className='mt-2 mb-2'>{item.Title}</h3>
        <button className='px-5 py-2 bg-white rounded-3xl text-center text-blue-950'>{item.Status} </button>
      </div>
            </div>
          })}
      </div>
      : <h1 className='text-center font-bold text-3xl py-7  text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-600'>Loading...</h1>}
    </div>
  )
}

export default Pages
