import './App.css'
import Dice from './dice'

function App() {

  return (
    <main className="bg-[#00449B] w-full h-screen flex justify-center items-center">
      <section className='bg-[#0054BB] min-h-[600px] w-full h-screen lg:w-1/4 lg:h-[90%] lg:border-2 lg:rounded-3xl drop-shadow-lg relative'>
        <div className="z-50 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">

        </div>
        <div className="z-0 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
          <div className="bg-white h-1/2 w-full">
            sarasa
          </div>
          <Dice />
        </div>
      </section>
    </main>
  )
}

export default App
