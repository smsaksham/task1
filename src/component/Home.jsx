import React, { Suspense } from 'react'
import Navbar from './Navbar'
// import Pages from './Pages'
const Pages  = React.lazy(()=>import ('./Pages.jsx'))
const Home = () => {
  return (
    <div className='flex-col bg-gray-200 pt-5'>

         <Navbar/>
          <h1 className=' pt-20 pb-20 text-center font-bold text-4xl py-7  text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600'>Science Fiction Stories </h1>
          <ul className='flex text-center justify-center gap-30 '>
            <li className='hover:scale-102 hover:shadow-2xl bg-blue-400 rounded-3xl px-7 py-3 items-center flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 11V8H13V11H16V13H13V16H11V13H8V11H11Z"></path></svg>New</li>
            <li className='hover:scale-102 hover:shadow-2xl bg-yellow-300 rounded-3xl px-5 py-1 flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z"></path></svg>In progress </li>
            <li className='hover:scale-102 hover:shadow-2xl bg-green-500 rounded-3xl px-5 py-1 flex items-center text-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM15 7H9V19H15V7ZM7 7H4V19H7V7ZM17 7V19H20V7H17ZM9 3V5H15V3H9Z"></path></svg> Complete</li>
            <li>
                <button className='bg-red-400 rounded-3xl px-7 py-3 flex items-center gap-2 hover:scale-102 hover:shadow-2xl'> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>Clear All</button>
            </li>
          </ul>
          <Suspense fallback={<h1 className='text-center font-bold text-3xl py-7  text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-600'>Loading...</h1>}  >
          <Pages/>
          </Suspense>
    </div>
  )
}

export default Home
