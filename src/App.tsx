import { useEffect, useState } from "react";
import Game from "./game";
import Home from "./home";
import { Header } from "./common/Header/Header";
import { Footer, FooterStart } from "./common/Footer";
import Background from "./common/Background";
import DatosPersonales from "./popup";

function App() {

  const [start, setStart] = useState(false);
  const [countCards, setCardsCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  function handleChange(data: any) {
    setStart(data);
  }

  useEffect(() => {
    if (countCards == 3) {
      setShowPopup(true);
    }
  }, [countCards])

  return (
    <>
      <main className={`w-full h-full absolute flex flex-col justify-center items-center duration-300 overflow-x-hidden`}>
        {showPopup && <DatosPersonales setShowPopup={setShowPopup} />}
        <Background />
        <Header />
        {!start && <Home setStart={handleChange} />}
        {start && <Game setCardsCount={setCardsCount} countCards={countCards} />}
        {false && <FooterStart/>}
        {true && <Footer start={start} />}
      </main>
    </>
  );
}

export default App
