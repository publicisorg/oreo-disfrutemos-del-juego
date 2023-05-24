import './App.css'
import Cards from './cards'
import { Footer } from './common/Footer'
import Dice from './dice'

function App() {

  return (
    <div className="bg-[#00449B] w-full h-screen ">
    <div className="bg-[#0054BB] w-full h-screen ">
      <main className='h-[90%]'>
      <section className=' min-h-[600px] lg:w-1/4 lg:h-[90%] lg:border-2 lg:rounded-3xl drop-shadow-lg relative flex justify-center items-center'>
        <div className="z-50 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">

        </div>
        <div className="z-0 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
          <div className=" h-1/2 w-full">
           <Cards/>
          </div>
          <Dice />
        </div>
      </section>
      </main>
      <Footer/>
  
    </div>
  
    </div>
  )
}

export default App
