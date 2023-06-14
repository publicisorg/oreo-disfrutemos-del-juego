
import { useEffect, useState } from 'react'
import UI from '../ui';
import Cards from '../cards';
import Dice from '../dice';
import { Footer } from '../common/Footer';
import { Header } from '../common/Header/Header';

function Game() {

  const [changeCard, toggleCards] = useState(false);
  const [refreshDice, setRefreshDice] = useState(false);
  const [tutorial, isTutorial] = useState(true);
  const [tutorialStage, setTutorialStage] = useState(1);
  const [diceResult, setDiceResult] = useState(0);

  useEffect(() => {
    isTutorial(true);
  }, [])

  useEffect(() => {
    if (tutorialStage == 4) {
      isTutorial(false);
    }
  }, [tutorialStage])

  useEffect(() => {
    setRefreshDice(!refreshDice);
  }, [changeCard])

  return (
      <div className="relative mx-auto border-slate-800 dark:border-slate-800 lg:bg-[#0054BB] lg:border-[14px] lg:rounded-[2.5rem] h-screen w-full lg:h-full lg:w-[400px] lg:shadow-lg">
        <div className="hidden lg:block h-[32px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="hidden lg:block h-[46px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="hidden lg:block h-[46px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="hidden lg:block h-[64px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="hidden lg:block rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-[#0054BB] dark:bg-[#0054BB]"></div>
        <div className="z-50 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center overflow-hidden">
          <div className='w-full h-full relative inset-0'>
            <UI
              changeCards={toggleCards}
              value={changeCard}
              diceResult={diceResult}
              tutorial={tutorial}
              setTutorial={isTutorial}
              tutorialStage={tutorialStage}
              setTutorialStage={setTutorialStage} />
          </div>
        </div>
        <div className="z-10 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center overflow-hidden">
          <div className="h-1/3 w-full">
            <Cards changeCard={changeCard} tutorial={tutorial} />
          </div>
          <div className={`w-full h-2/3 relative box-border duration-300`}>
            {true && <Dice setDiceResult={setDiceResult} tutorial={tutorial} tutorialStage={tutorialStage} refreshDice={refreshDice}/>}
          </div>
        </div>
      </div>
  );
}

export default Game
