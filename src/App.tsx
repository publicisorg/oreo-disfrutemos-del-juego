import './App.css'
import Cards from './cards'
import { Footer } from './common/Footer'
import { Header } from './common/Header/Header'
import Dice from './dice'

function App() {

  return (
    <main className="bg-[#0054BB] w-full h-screen flex flex-col justify-center items-center gap-2">
      <Header></Header>
      <section className='bg-[#0054BB] min-h-[600px] w-full h-screen lg:w-1/4 lg:h-[90%] lg:border-2 lg:rounded-3xl  relative'>
        <div className="z-50 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">

        </div>
        <div className="z-0 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
          <div className=" h-1/2 w-full">
           <Cards/>
          </div>
          <Dice />
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default App
