
import { useEffect, useState } from 'react'
import UI from '../ui';
import Cards from '../cards';
import Dice from '../dice';

function Game() {

  const [changeCard, toggleCards] = useState(false);
  const [refreshDice, setRefreshDice] = useState(false);
  const [tutorial, isTutorial] = useState(true);
  const [tutorialStage, setTutorialStage] = useState(1);
  const [diceResult, setDiceResult] = useState(0);
  const [diceStop, setDiceStop] = useState(true);

  useEffect(() => {
    isTutorial(true);
  }, [])

  useEffect(() => {
    if (!diceStop) {
      setDiceResult(0);
    }
  }, [diceStop])

  useEffect(() => {
    if (tutorialStage == 4) {
      isTutorial(false);
      setRefreshDice(!refreshDice);
    }
  }, [tutorialStage])

  useEffect(() => {
    setRefreshDice(!refreshDice);
  }, [changeCard])

  return (
    <div className="relative mx-auto lg:bg-[#0054BB] w-full h-full lg:w-[400px]">
      <div className='z-50 w-full h-full relative inset-0'>
        <UI
          changeCards={toggleCards}
          value={changeCard}
          diceResult={diceResult}
          tutorial={tutorial}
          setTutorial={isTutorial}
          tutorialStage={tutorialStage}
          setTutorialStage={setTutorialStage} 
          diceStop={diceStop}
          />
      </div>
      <div className="z-10 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <div className="h-1/3 w-full">
          <Cards changeCard={changeCard} tutorial={tutorial} />
        </div>
        <div className={`w-full h-2/3 relative box-border duration-300`}>
          {true && <Dice setDiceStop={setDiceStop} setDiceResult={setDiceResult} tutorial={tutorial} tutorialStage={tutorialStage} refreshDice={refreshDice} />}
        </div>
      </div>
    </div>
  );
}

export default Game
