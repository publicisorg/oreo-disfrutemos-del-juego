import { useState } from "react";
import Game from "./game";
import Home from "./home";
import { Header } from "./common/Header/Header";
import { Footer, FooterStart } from "./common/Footer";
import Background from "./common/Background";

function App() {

  const [start, setStart] = useState(false);
  const [opacity, setOpacity] = useState("opacity-100");

  function handleChange(data: any) {
      setStart(data);
  }

  return (
    <>
      <main className={`w-full h-screen flex flex-col justify-between items-center gap-8 duration-300`}>
        <Background/>
        <Header />
        {!start && <Home setStart={handleChange} setOpacity={setOpacity}/>}
        {start && <Game />}
        {!start && <FooterStart opacity={opacity}/>}
        {start && <Footer opacity={opacity}/>}
      </main>
    </>
  );
}

export default App
