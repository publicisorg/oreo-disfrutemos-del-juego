import { useState } from "react";
import Game from "./game";
import Home from "./home";
import { Header } from "./common/Header/Header";
import { FooterStart } from "./common/Footer";

function App() {

  const [start, setStart] = useState(false);

  function handleChange(data: any) {
    setStart(data);
  }

  return (
    <>
      <main className={`bg-[#0054BB] lg:bg-transparent w-full h-screen flex flex-col justify-around items-center gap-8 duration-300`}>
        <Header />
        {!start && <Home setStart={handleChange} />}
        {start && <Game />}
        <FooterStart />
      </main>
    </>
  );
}

export default App
