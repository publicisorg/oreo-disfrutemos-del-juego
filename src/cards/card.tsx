import { useEffect, useState } from "react"
import cards from "./cards.json"

const cardsTutorial = [
  {
    pregunta: "SE JUEGA POR TURNO",
    categoria: `Cuando veas la carta en pantalla,\n podés empezar.`,
    index: 1,
  },
  {
    pregunta: `TIRÁ EL DADO`,
    categoria: `El color del dado determina\n qué pasa en el juego.`,
    index: 2,
  },
  {
    pregunta: `PASA\n A LA SIGUIENTE CARTA`,
    categoria: `Apretando el botón “siguiente”\n descubrís diferentes consignas\n para divertirte en familia.`,
    index: 3,
  }
];

export const CardsNew = (props: any) => {

  const [actualCard, setActualCard] = useState<any>([]);
  const [AnimatedCard, setAnimatedCard] = useState<any>([]);
  const [duration, setDuration] = useState("duration-1000");
  const [duration2, setDuration2] = useState("duration-1000");
  const [duration3, setDuration3] = useState("duration-1000");
  const [duration4, setDuration4] = useState("duration-1000");
  const [animations, setAnimations] = useState("-top-[1000px] left-0 right-0 scale-110 shadow-[0px_0px_3px_2px_#00000015]");
  const [animations2, setAnimations2] = useState("-top-[1000px] scale-110 shadow-[0px_0px_3px_2px_#00000015]");
  const [animations3, setAnimations3] = useState("-top-[1000px] scale-110");
  const [animations4, setAnimations4] = useState("-top-[1000px] scale-110");
  const [cardType, setCardType] = useState(true);
  const [cardType2, setCardType2] = useState(true);
  const [tutorialStage, setTutorialStage] = useState(0);
  const [desplazamiento, setDesplazamiento] = useState("-right-[1000px]");

  useEffect(() => {
    if (window.innerWidth > 1000 && window.innerWidth < 1500) {
      setDesplazamiento("-right-[2000px]");
    }
    if (window.innerWidth > 1500) {
      setDesplazamiento("-right-[3000px]");
    }
    const selectCard = cardsTutorial[tutorialStage];
    setActualCard(selectCard);
    setAnimatedCard(selectCard);
    setTimeout(() => {
      setAnimations4("top-2 bottom-0 scale-100");
    }, 200);
    setTimeout(() => {
      setAnimations3("top-0 bottom-0 scale-100");
    }, 250);
    setTimeout(() => {
      setAnimations2("top-0 bottom-0 scale-100 shadow-[0px_0px_3px_2px_#00000015]");
    }, 300);
    setTimeout(() => {
      setAnimations("top-0 bottom-0 right-0 left-0 scale-100 shadow-[0px_0px_3px_2px_#00000015]");
    }, 350);
    setTimeout(() => {
      props.setEnableControls(true);
      setTutorialStage(1);
    }, 1000)
  }, [])

  useEffect(() => {
    if (props.enableControls) {
      props.setEnableControls(false);
      if (!props.tutorial) {
        props.setCardsCount(props.countCards + 1);
      }
      setDuration2("duration-0");
      setDuration3("duration-0");
      setDuration4("duration-0");
      setDuration('duration-300');
      var selectCard;
      if (props.tutorial) {
        if (tutorialStage == 2) {
          setTutorialStage(0);
        } else {
          setTutorialStage(tutorialStage + 1);
        }
        selectCard = cardsTutorial[tutorialStage];
      } else {
        selectCard = cards[Math.floor(Math.random() * 100)];
      }
      setActualCard(selectCard);
      setTimeout(() => {
        setAnimations("rotate-6 right-[100px] left-0 bottom-0 top-0 scale-110 shadow-[0px_0px_3px_2px_#00000030]");
        setAnimations2("bottom-0 top-0 left-0 right-0 shadow-[0px_0px_3px_2px_#00000030]");
      }, 50);
      setTimeout(() => {
        setDuration('duration-1000');
        setAnimations("rotate-[45deg] " + desplazamiento + " left-0 bottom-0 top-0");
      }, 300);
      setTimeout(() => {
        if (!props.tutorial && cardType) {
          setCardType(false);
        }
        setAnimatedCard(selectCard);
        setDuration('duration-0');
        setAnimations("left-0 right-0 bottom-0 top-0 rotate-0 scale-100 shadow-[0px_0px_3px_2px_#00000015]");
        setAnimations2("bottom-0 top-0 shadow-[0px_0px_3px_2px_#00000015]");
        props.setEnableControls(true);
      }, 2000);
    }
  }, [props.changeCard])

  useEffect(() => {
    if (!props.tutorial) {
      setCardType2(false);
    }
  }, [props.tutorial])

  return (
    <div className="relative w-full h-full text-white">
      <SingleCard tutorial={cardType} index={AnimatedCard.index} duration={duration} animations={animations} categoria={AnimatedCard.categoria} pregunta={AnimatedCard.pregunta} className="m-auto z-50" />
      <SingleCard tutorial={cardType2} index={actualCard.index} duration={duration2} animations={animations2} categoria={actualCard.categoria} pregunta={actualCard.pregunta} className="m-auto left-0 right-0 z-40" />
      <SingleCard tutorial={false} index={actualCard.index} duration={duration3} animations={animations3} className="-rotate-6 m-auto left-4 right-0 z-30 shadow-[0px_0px_3px_2px_#00000030]" />
      <SingleCard tutorial={false} index={actualCard.index} duration={duration4} animations={animations4} className="rotate-[9deg] m-auto left-0 right-0 z-20 shadow-[0px_0px_3px_2px_#00000030]" />
    </div>
  )
}

export const SingleCard = (props: any) => {
  return (
    <>
      {!props.tutorial && <div className={`${props.className} ${props.duration} ${props.animations} w-[290px] md:w-[325px] h-[160px] md:h-[200px] absolute bg-white rounded-[17px] border overflow-hidden`}>
        <div className="aboslute tracking-tighter top-0 bg-[#0054BB] w-full h-[30px] flex justify-center items-center text-[10px] uppercase md:text-xs">
          {props.categoria}
        </div>
        <div className="text-[#0054BB] pluto-black flex w-full px-2 h-[80%] justify-center items-center text-center uppercase text-[15px] md:text-base">
          {props.pregunta}
        </div>
      </div>}
      {props.tutorial && <div className={`${props.className} ${props.duration} ${props.animations} w-[290px] md:w-[325px] h-[160px] md:h-[200px] absolute bg-white rounded-[17px] border overflow-hidden`}>
        <div className="text-[#0054BB] pluto-black flex w-full px-2 h-full flex-col justify-center items-center text-center text-lg">
          <p className="pluto-black uppercase text-base md:text-xl whitespace-pre tracking-tighter">{props.pregunta}</p>
          <p className="text-xs md:text-sm whitespace-pre tracking-tighter">{props.categoria}</p>
          <div className="flex flex-row justify-center items-center gap-1 absolute bottom-2">
            <div className={`rounded-full aspect-square h-3 ${props.index == 1 ? "border-[#0054BA] bg-[#0054BA]" : "border-[#D9D9D9] bg-transparent"} border-2`} />
            <div className={`rounded-full aspect-square h-3 ${props.index == 2 ? "border-[#0054BA] bg-[#0054BA]" : "border-[#D9D9D9] bg-transparent"} border-2`} />
            <div className={`rounded-full aspect-square h-3 ${props.index == 3 ? "border-[#0054BA] bg-[#0054BA]" : "border-[#D9D9D9] bg-transparent"} border-2`} />
          </div>
        </div>
      </div>}
    </>
  )
}