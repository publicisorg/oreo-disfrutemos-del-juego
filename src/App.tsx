import { useEffect, useState } from "react";
import Game from "./game";
import Home from "./home";
import { Header } from "./common/Header/Header";
import { Footer, FooterStart } from "./common/Footer";
import Background from "./common/Background";
import DatosPersonales from "./popup";
import SharePopUp from "./popup/share";

function App() {

  const [start, setStart] = useState(false);
  const [countCards, setCardsCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showShare, setShowShare] = useState(false);

  function handleChange(data: any) {
    setStart(data);
    console.log(showPopup);
  }

  useEffect(() => {
    if (countCards == 3) {
      setShowPopup(true);
    }
  }, [countCards])

  return (
    <>
      <main className={`w-full h-full absolute flex flex-col justify-center items-center duration-300 overflow-hidden`}>
        {false && <DatosPersonales setShowPopup={setShowPopup} />}
        <Background />
        <Header setShowShare={setShowShare} />
        {!start && <Home setStart={handleChange} />}
        {start && <Game setCardsCount={setCardsCount} countCards={countCards} />}
        {false && <FooterStart/>}
        {true && <Footer setShowShare={setShowShare} start={start} />}
        {showShare && <SharePopUp setShowShare={setShowShare} start={start} />}
      </main>
    </>
  );
}

export default App
