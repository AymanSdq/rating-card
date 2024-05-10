import { useState } from 'react'
import './App.css'

function App() {

  const [getNumber , setGetNumber] = useState();

  const [showIt, setShowIt] = useState(false);

  const [submitForm , setSubmitForm] = useState(true)


  const clickTogetValue = (e) => {
    const setit = e.target.value;
    setGetNumber(setit);
    console.log(getNumber)
  }

  const onClickShowIt = () => {
    setShowIt(!showIt)
  }

  const onClickSubmit = (e) => {
    setSubmitForm(!submitForm)
  }

  if(getNumber == 1){
    var value1 = 'bg-lightGrey'
  }else if(getNumber == 2){
    var value2 = 'bg-lightGrey'
  }else if(getNumber == 3){
    var value3 = 'bg-lightGrey'
  }else if(getNumber == 4){
    var value4 = 'bg-lightGrey'
  }else if(getNumber == 5){
    var value5 = 'bg-lightGrey'
  }


  return (
    <>
      <main className=' bg-veryDarkBlue w-full h-screen flex justify-center items-center' role='main'>
        
        <section className={`p-8 gap-6 w-[400px] bg-darkBlue rounded-md  flex-col ${submitForm ? 'flex' : 'hidden'}`}>
          {/* Icon container */}
          <div className='p-1 bg-veryDarkBlue w-12 h-12 rounded-full  flex justify-center  items-center'>
            <img src="/icon-star.svg" alt="Star Icon"  className=' w-7'/>
          </div>

          <h1 className=' text-white text-xl'>How did we do ?</h1>

          <p className=' text-lightGrey '>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>

          <div className=' flex gap-6 justify-between'>

            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <button onClick={clickTogetValue} value="1" className={`bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor ${value1}`}>
              <p>1</p>
            </button>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <button onClick={clickTogetValue} value="2" className={`bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor ${value2}`}>
              <p>2</p>
            </button>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <button onClick={clickTogetValue} value="3" className={`bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor ${value3}`}>
              <p>3</p> 
            </button>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <button onClick={clickTogetValue} value="4" className={`bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor ${value4}`}>
              <p>4</p>   
            </button>
            {/* Items 1 - 2 - 3 - 4 - 5 - */}
            <button onClick={clickTogetValue} value="5" className={`bg-veryDarkBlue w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-orangeColor ${value5}`}>
              <p>5</p> 
            </button>
          </div>

          <button onClick={onClickSubmit} className='flex justify-center items-center rounded-full bg-orangeColor text-white py-2 hover:text-orangeColor hover:bg-white'>Submit</button>

        </section>


        {/* second section  */}
        <section className={`p-8 gap-6 w-[400px] bg-darkBlue rounded-md text-center  flex-col ${submitForm ? 'hidden' : 'flex'}` }>

            <img src="./illustration-thank-you.svg" alt="checkout image" />

            <p className=' text-orangeColor bg-slate-600 text-sm px-4 py-2 rounded-full'>You selected {getNumber} out of 5</p>

            <h1 className='text-2xl text-white'>Thank you!</h1>

            <p className=' text-lightGrey text-center'>We appreciate you taking the time to give a rating. If you ever need more support, 
                  don’t hesitate to get in touch!</p>

        </section>

      </main>
    </>
  )
}

export default App
