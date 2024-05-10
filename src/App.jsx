import { useState } from 'react'
import './App.css'

function App() {

  const [clickOnIT, setClickOnIt] = useState("");



  return (
    <>
      <main className=' bg-veryDarkBlue w-full h-screen flex justify-center items-center' role='main'>
        
        <section className='p-8 gap-6 w-[400px] bg-darkBlue rounded-md  flex-col hidden'>
          {/* Icon container */}
          <div className='p-1 bg-veryDarkBlue w-12 h-12 rounded-full  flex justify-center  items-center'>
            <img src="/icon-star.svg" alt="Star Icon"  className=' w-7'/>
          </div>

          <h1 className=' text-white text-xl'>How did we do ?</h1>

          <p className=' text-lightGrey '>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>

          <div className=' flex gap-6 justify-between'>

            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor'>
              <p>1</p>
            </div>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor'>
              <p>2</p>
            </div>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor'>
              <p>3</p> 
            </div>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor'>
              <p>4</p>   
            </div>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <div className='bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor'>
              <p>5</p> 
            </div>
          </div>

          <button className='flex justify-center items-center rounded-full bg-orangeColor text-white py-2 hover:text-orangeColor hover:bg-white'>Submit</button>

        </section>


        {/* second section  */}
        <section className='p-8 gap-6 w-[400px] bg-darkBlue rounded-md  flex-col flex justify-center items-center'>

            <img src="./illustration-thank-you.svg" alt="checkout image" />

            <p className=' text-orangeColor bg-slate-600 text-sm px-4 py-2 rounded-full'>You selected 1 out of 5</p>

        </section>

      </main>
    </>
  )
}

export default App
