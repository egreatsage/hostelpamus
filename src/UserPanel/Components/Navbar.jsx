import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () =>setNav(!nav)
  return (
    <div className='w-screen bg-[#F7FAFC] h-[80px]  z-10 fixed  drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Pamus</h1>
          <ul className="hidden md:flex">
          <Link className='text-black no-underline text-extrabold upeercase' to='/'><li>Home</li></Link>
          <Link className='text-black no-underline text-extrabold upeercase' to='/AboutUs'><li>About</li></Link>
          <Link className='text-black no-underline text-extrabold upeercase' to='/Pricing'><li>Pricing</li></Link>
          <Link className='text-black no-underline text-extrabold upeercase' to='/Faqs'><li>FAQS</li></Link>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
        <Link className=' no-underline text-extrabold upeercase rounded-full  w-full text-white ' to='/Contact'><button className='bg-slate-600 rounded-3xl bg-contain'>Contact</button></Link> 
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ?     <AiOutlineMenu className='w-5 cursor-pointer duration-200' /> : <AiOutlineClose className='w-5 cursor-pointer'/>}
          
        </div>
      </div>
      <ul className={!nav ? 'hidden' : "absolute bg-transparent w-full px-8"}>
         <Link className='text-black no-underline text-extrabold upeercase' to='/'><li className="border-b-2 border-blue-grey-200 w-full">Home</li></Link>
         <Link className='text-black no-underline text-extrabold upeercase' to='/AboutUs'><li className="border-b-2 border-blue-grey-200 w-full">About</li></Link>
         <Link className='text-black no-underline text-extrabold upeercase' to='/Pricing'><li className="border-b-2 border-blue-grey-200 w-full">Pricing</li></Link>
         <Link className='text-black no-underline text-extrabold upeercase' to='/FAQS'><li className="border-b-2 border-blue-grey-200 w-full">FAQS</li></Link>
         
         <div className='flex flex-col my-4'>
         <Link className='text-black no-underline text-extrabold upeercase' to='/Contact'><button className="border-b-2 border-blue-grey-200 w-full">Contact</button>hello</Link>
         </div>
      </ul>
    </div>
  )
}

export default Navbar