import React from 'react'
// import {AiFillFacebook,AiOutlineWhatsApp,AiFillInstagram,AiFillYahoo} from 'react-icons/ai'
import {GiSecurityGate,GiWaterTower,} from 'react-icons/gi'
import {FcWiFiLogo,FcLibrary,FcRight} from 'react-icons/fc'


const Home = () => {
  return (
    <div>
    <section id="Home" className="class">
       <div className="w-full h-screen shadow-sm  blurred bg-cover bg-bg-image flex flex-col justify-between">
     <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
      <div className='flex flex-col justify-center md:items-start w-full px-2 py-5'>
        <h1 className='text-5xl md:text-6xl text-orange-500 font-extrabold'>Pamus Hostels</h1>
        <p className='text 2xl'>Private Mixed Hostels in Bungoma</p>
      </div>
      <div >
    {/* <img src='' alt="" className="w-full h-56 rounded-md shadow-md pt-5 md:pt-1" /> */}
   
    </div>
   </div>
</div>

    </section>
  
  <section className="class" id="AboutUs">
  <div className='w-full my-32'>
    <div className=' max-w-[1240px] mx-auto'>
      <div className=' text-center '>
        <h2 className='text-5xl font-bold '>Trusted Hostels With A good Reputation</h2>
        <p className='text-3xl py-6 text-gray-5 '>We have partners and students all around town who are staying at the hostels 
          from all over the town
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-1 px-2 text-center cursor-pointer'>
        <div className='border py-8 rounded-xl px-2 text-center hover:shadow-md'>
          <p className='text-6xl font-bold text-indigo-600 '>100+</p>
          <p className='text-gray-400 mt-2'>Students</p>
        </div>
        <div className='border py-8 rounded-xl px-2 text-center hover:shadow-md'>
          <p className='text-6xl font-bold text-indigo-600'>15+</p>
          <p className='text-gray-400 mt-2>Students'>Partners</p>
        </div>
        <div className='border py-8 rounded-xl px-2 text-center hover:shadow-md'>
          <p className='text-6xl font-bold text-indigo-600'>20+</p>
          <p className='text-gray-400 mt-2>Institutions'>Institutions</p>
        </div>
      </div>
    </div>
   </div>
  </section>
  <section className="class" id="Facilities">
  <div className='w-full h-screen mt-24'>
      <div className='w-full h-[800px] bg-gray] absolute'>
        <img src='https://www.kayak.com/rimg/himg/d5/76/96/hotelsdotcom-611991648-d7d916e0_w-184592.jpg?width=720&height=576&crop=true'
        className='w-full h-full object-cover mix-blend-overlay ' alt="" />
      </div>
      <div className='max-w-[1240px] mx-auto text-auto relative'>
        <div className='px-4 py-12'>
          <h2 className='pt-8 text-3xl text-white uppercase text-center font-extrabold'>Amenities</h2>
          <h3 className='text-4xl  py-6 text-center text-white font-extrabold'>We are Equipped With</h3>
          <p className='py-4 text-3xl text-white font-extrabold'>The Hostel has many Student facilities that make it possible for a satisfactory stay in the institution</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative 
        gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>

          <div className='bg-[white] rounded-md opacity-15 shadow-md'>
            <div className='p-8'>
              <FcWiFiLogo className=' w-16 cursor-pointer text-7xl text-[indigo] mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-6'>Free Wifi</h3>
              <p className='text-gray-600 text-xl'>Fast internet wifi speeds
              Fast internet wifi speeds
              Fast internet wifi speeds
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
            <p className='flex items-center  cursor-pointer hover:text-[orange]'>Read More <FcRight className='ml-2 w-5 '/></p>
            </div>
          </div>
          <div className='bg-[white] rounded-sm shadow-md'>
            <div className='p-8'>
              <GiWaterTower className=' w-16 cursor-pointer text-7xl text-[indigo] mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-6'>Water </h3>
              <p className='text-gray-600 text-xl'> privately owned water 
              pumped within the Hostel with a water bowhole as a backup
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
            <p className='flex items-center cursor-pointer hover:text-[orange]'>Read More <FcRight className='ml-2 w-5 '/></p>
            </div>
          </div>
          <div className='bg-[white] rounded-sm shadow-md  cursor-pointer hover:ring-[blue]'>
            <div className='p-8'>
              <GiSecurityGate className=' w-16 stroke-sky-500 group-hover:stroke-white cursor-pointer text-7xl text-[indigo] mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-6'>Security</h3>
              <p className='text-gray-600 text-xl'>
                24hrs Security guard from certified company .Fully fenced with only main gate
                back gate opened
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
            <p className='flex items-center  cursor-pointer hover:text-[orange]'>Read More <FcRight className='ml-2 w-5 '/></p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>

  <section className='my-32 sm:my-32' id='Pricing'>
  <div className='w-full my-32'>
    <div className=' max-w-[1240px] mx-auto'>
    <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300 dark:text-orange-600 '>
                <h2 className='text-3xl uppercase '>Pricing</h2>
                <h3 className='text-5xl font-bold text-[black] py-8'>Affordable Prices for Everyone</h3>
                <p className='text-3xl text-black'>We Offer best price plans to students that
                    are comfortable with  everybody
                </p>
            </div>
            
            <div className='grid md:grid-cols-3 gap-4'>
                <div className='bg-[white] text-slate-900 p-8 rounded-xl shadow-2xl'>
                    <span className="uppercase px-3 py-1 bg-[#1b1a1b] text-[white] rounded-2xl text-sm">
                        Single Room
                    </span>
                    <div>
                        <p className='text-6xl text-blue-grey-900 font-bold py-4 flex'>Ksh 3000<span className='text-xl text-blue-900 flex flex-col justify-end'>/month</span></p>
                    </div>
                    <p className='text-xl font-semibold'>Each Individual One Room</p>
                    <div>
                        <p>...........</p>
                        <button className="w-full py-4 text-xl my-4  bg-slate-500 rounded-full hover:bg-[#87ceeb]">Book Now</button>

                    </div>
                </div>
                <div className='bg-[white] text-slate-900 p-8 rounded-xl shadow-2xl'>
                    <span className="uppercase px-3 py-1 bg-[#1b1a1b] text-[white] rounded-2xl text-sm">
                        2 Sharing
                    </span>
                    <div>
                        <p className='text-6xl text-blue-grey-900 font-bold py-4 flex'>Ksh 2000<span className='text-xl text-blue-900 flex flex-col justify-end'>/month</span></p>
                    </div>
                    <p className='text-xl font-semibold'>Two Heads per Room Each 2000/=</p>
                    <div>
                        <p>...........</p>
                        <button className="w-full py-4 text-xl my-4  bg-slate-500  rounded-full hover:bg-[#87ceeb]">Book Now</button>

                    </div>
                </div>
                <div className='bg-[white] text-slate-900 p-8 rounded-xl shadow-2xl'>
                    <span className="uppercase px-3 py-1 bg-[#1b1a1b] text-[white] rounded-2xl text-sm">
                        Special Rooms
                    </span>
                    <div>
                        <p className='text-6xl text-blue-grey-900 font-bold py-4 flex'>Ksh 3000<span className='text-xl text-blue-900 flex flex-col justify-end'>/month</span></p>
                    </div>
                    <p className='text-xl font-semibold'>As Requested by Hostellar </p>
                    <div>
                        <p>...........</p>
                        <button className="w-full h-30 py-4 text-xl my-4  bg-slate-500  rounded-full hover:bg-[#87ceeb]">Book Now</button>
                    </div>
                </div>
                </div>
                </div>
    </div>
   </div>
  </section>

  
  </div>
  )
}

export default Home