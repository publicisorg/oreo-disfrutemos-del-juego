
import { useEffect, useState } from 'react'
import UI from '../ui';
import Cards from '../cards';
import Dice from '../dice';
import { CardsNew } from '../cards/card';

function Game(props:any) {

  const [changeCard, toggleCards] = useState(false);
  const [refreshDice, setRefreshDice] = useState(false);
  const [tutorial, isTutorial] = useState(true);
  const [diceResult, setDiceResult] = useState(0);
  const [diceStop, setDiceStop] = useState(true);
  const [enableControls, setEnableControls] = useState(false);

  useEffect(() => {
    isTutorial(true);
  }, [])

  useEffect(() => {
    if (!diceStop) {
      setDiceResult(0);
    }
  }, [diceStop])

  useEffect(() => {
    setRefreshDice(!refreshDice);
  }, [changeCard])

  return (
    <div className="relative mx-auto w-full h-full lg:w-[600px]">
      <div className='z-50 w-full h-full relative inset-0'>
        <UI
          changeCards={toggleCards}
          value={changeCard}
          diceResult={diceResult}
          tutorial={tutorial}
          setTutorial={isTutorial}
          diceStop={diceStop}
          isTutorial={isTutorial}
          enableControls={enableControls}
          />
      </div>
      <div className="z-10 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
        <div className="h-1/3 w-full">
          {false && <Cards countCards={props.countCards} changeCard={changeCard} tutorial={tutorial} setCardsCount={props.setCardsCount}/>}
          <CardsNew enableControls={enableControls} setEnableControls={setEnableControls} countCards={props.countCards} changeCard={changeCard} tutorial={tutorial} setCardsCount={props.setCardsCount}/>
        </div>
        <div className={`w-full h-2/3 relative box-border duration-300`}>
          {true && <Dice setDiceStop={setDiceStop} setDiceResult={setDiceResult} tutorial={tutorial} refreshDice={refreshDice} />}
        </div>
      </div>
    </div>
  );
}

export default Game
