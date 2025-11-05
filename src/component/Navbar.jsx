import React from 'react'
const Navbar = () => {
  return (
    <div> 
       <nav className='flex text-center  items-center  justify-between px-10 '>
        <div className='text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 font-bold text-2xl '>logo</div>
            <ul className='flex text-center gap-5 font-bold '>
                <li className=''>Home</li>
                <li>LeaderBord</li>
                <li>Daily quiz</li>
                <li>
                    <select className=' text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600' id='select-option'>
                        <option value=" " className=' bg-blue-950 text-white '>Genre</option>
                        <option value=""className=' bg-blue-950 text-white'>Genre</option>
                        <option value=""className=' bg-blue-950 text-white'>Genre</option>
                    </select>
                </li>
            </ul>
            <button id='signup' className='px-4 py-2 border-blue-400 bg-blue-800 rounded-2xl text-white hover:scale-101 text-center'>Sign Up</button>
       </nav>
    </div>
  )
}

export default Navbar
 