
import { useEffect, useState } from 'react'
import UI from '../ui';
import Dice from '../dice';
import { CardsNew } from '../cards/card';

function Game(props: any) {

  const [changeCard, toggleCards] = useState(false);
  const [refreshDice, setRefreshDice] = useState(false);
  const [tutorial, isTutorial] = useState(true);
  const [diceResult, setDiceResult] = useState(0);
  const [diceStop, setDiceStop] = useState(true);
  const [enableControls, setEnableControls] = useState(false);
  const [queueAction, setQueueAction] = useState(false);

  useEffect(() => {
    isTutorial(true);
  }, [])

  useEffect(() => {
    if (!diceStop) {
      setDiceResult(0);
      setEnableControls(false);
    } else {
      setEnableControls(true);
    }
  }, [diceStop])

  useEffect(() => {
    setRefreshDice(!refreshDice);
  }, [changeCard])

  useEffect(() => {
    if (queueAction && tutorial) {
      setQueueAction(false);
      isTutorial(false);
      toggleCards(!changeCard);
    }
    if (tutorial && enableControls) {
      setTimeout(() => {
        if (tutorial && enableControls) {
          toggleCards(!changeCard);
        }
      }, 5000);
    }
  }, [enableControls])

  return (
    <div className="w-full h-full relative">
      <div className="relative mx-auto w-full h-full lg:w-[600px]">
        <div className='z-50 w-full h-full relative inset-0'>
          <UI
            changeCards={toggleCards}
            value={changeCard}
            diceResult={diceResult}
            tutorial={tutorial}
            diceStop={diceStop}
            isTutorial={isTutorial}
            enableControls={enableControls}
            setQueueAction={setQueueAction}
          />
        </div>
        <div className="z-10 absolute left-0 top-0 w-full h-full flex flex-col justify-start items-center">
          <div className="h-1/3 md:h-2/5 w-full md:pt-16">
            <CardsNew enableControls={enableControls} setEnableControls={setEnableControls} countCards={props.countCards} changeCard={changeCard} tutorial={tutorial} setCardsCount={props.setCardsCount} />
          </div>
          <div className={`w-full h-2/3 md:h-2/5 relative box-border duration-300`}>
            <Dice setDiceStop={setDiceStop} setDiceResult={setDiceResult} tutorial={tutorial} refreshDice={refreshDice} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game
