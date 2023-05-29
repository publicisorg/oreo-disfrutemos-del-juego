
import './App.css'
import Cards from './cards'
import { Footer } from './common/Footer'
import { Header } from './common/Header/Header'
import Dice from './dice'

function App() {

  return (
    <main className="bg-[#0054BB] lg:bg-transparent w-full h-screen flex flex-col justify-center items-center gap-2">
      <Header />
      {/*<section className="bg-[#0054BB] min-h-[600px] w-full h-screen lg:w-1/4 lg:h-[90%] lg:border-2 lg:rounded-3xl relative overflow-hidden">*/}
      <div className="relative mx-auto border-slate-800 dark:border-slate-800 lg:bg-[#0054BB] lg:border-[14px] lg:rounded-[2.5rem] h-screen w-full lg:h-[90%] lg:w-1/4 lg:min-w-[400px] lg:shadow-lg">
        <div className="hidden lg:block h-[32px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="hidden lg:block h-[46px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="hidden lg:block h-[46px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="hidden lg:block h-[64px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="hidden lg:block rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-[#0054BB] dark:bg-[#0054BB]"></div>
        <div className="z-50  absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center overflow-hidden">
          {/* UI */}
        </div>
        <div className="z-10 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center overflow-hidden">
          <div className="h-1/2 w-full">
            <Cards />
          </div>
          <Dice />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App
