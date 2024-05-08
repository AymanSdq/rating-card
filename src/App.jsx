import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <main className=' bg-veryDarkBlue w-full h-screen flex justify-center items-center' role='main'>
        
        <section className='p-8 gap-6 w-[400px] bg-darkBlue rounded-md flex flex-col '>
          {/* Icon container */}
          <div className='p-1 bg-veryDarkBlue w-12 h-12 rounded-full  flex justify-center  items-center'>
            <img src="/icon-star.svg" alt="Star Icon"  className=' w-7'/>
          </div>

          <h1 className=' text-white text-xl'>How did we do ?</h1>

          <p className=' text-lightGrey '>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>

          <div className=' flex gap-6 justify-center'>

            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-10 h-10 rounded-full flex justify-center items-center text-white'>
              <p>1</p>
            </div>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-10 h-10 rounded-full flex justify-center items-center text-white'>
              <p>2</p>
            </div>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-10 h-10 rounded-full flex justify-center items-center text-white'>
              <p>3</p> 
            </div>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-10 h-10 rounded-full flex justify-center items-center text-white'>
              <p>4</p>   
            </div>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-10 h-10 rounded-full flex justify-center items-center text-white'>
              <p>5</p> 
            </div>
          </div>

          <button className='flex justify-center items-center rounded-full bg-orangeColor text-white py-2'>Submit</button>

        </section>

      </main>
    </>
  )
}

export default App
