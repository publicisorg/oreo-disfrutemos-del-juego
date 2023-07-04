import { useEffect, useState } from "react"
import cards from "./cards.json"
import useSound from 'use-sound';

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
  const [desktopTutorial, setDesktopTutorial] = useState("");
  const [cardType, setCardType] = useState(true);
  const [cardType2, setCardType2] = useState(true);
  const [tutorialStage, setTutorialStage] = useState(0);
  const [desplazamiento, setDesplazamiento] = useState("-right-[1000px]");
  const [cardflipSound] = useSound('./assets/sounds/cardflip.mp3',{ volume: 0.01 });

  useEffect(() => {
    if (props.tutorial && window.innerWidth > 1023) {
      setDesktopTutorial("mt-32");
    }
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
    if (!props.tutorial) {
      setDuration2("duration-1000");
      setDuration3("duration-1000");
      setDuration4("duration-1000");
      setDuration('duration-1000');
      setDesktopTutorial("mt-0");
    }
    if (props.enableControls) {
      if (props.tutorial) {
        props.setEnableControls(false);
      }
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
        cardflipSound();
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
        if (props.tutorial) {
          props.setEnableControls(true);
        }
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
      <SingleCard tutorial={cardType} index={AnimatedCard.index} duration={duration} animations={animations} desktopTutorial={desktopTutorial} categoria={AnimatedCard.categoria} pregunta={AnimatedCard.pregunta} className="m-auto z-50" />
      <SingleCard tutorial={cardType2} index={actualCard.index} duration={duration2} animations={animations2} desktopTutorial={desktopTutorial} categoria={actualCard.categoria} pregunta={actualCard.pregunta} className="m-auto left-0 right-0 z-40" />
      <SingleCard tutorial={false} index={actualCard.index} duration={duration3} animations={animations3} desktopTutorial={desktopTutorial} className="-rotate-6 m-auto left-4 right-0 z-30 shadow-[0px_0px_3px_2px_#00000030]" />
      <SingleCard tutorial={false} index={actualCard.index} duration={duration4} animations={animations4} desktopTutorial={desktopTutorial} className="rotate-[9deg] m-auto left-0 right-0 z-20 shadow-[0px_0px_3px_2px_#00000030]" />
    </div>
  )
}

export const SingleCard = (props: any) => {
  return (
    <>
      {!props.tutorial && <div className={`${props.className} ${props.duration} ${props.animations} ${props.desktopTutorial} w-[290px] md:w-[325px] xl:w-[350px] h-[160px] md:h-[200px] xl:h-[225px] absolute bg-white rounded-[17px] border overflow-hidden`}>
        <div className="aboslute tracking-tighter pt-[1px] top-0 bg-[#0054BB] w-full h-[30px] flex justify-center items-center text-[10px] uppercase md:text-xs xl:text-sm">
          {props.categoria}
        </div>
        <div className="text-[#0054BB] pluto-black flex w-full p-4 px-6 h-[80%] justify-center items-center text-center uppercase text-[14px] md:text-base xl:text-xl">
          {props.pregunta}
        </div>
      </div>}
      {props.tutorial && <div className={`${props.className} ${props.duration} ${props.animations} ${props.desktopTutorial} w-[290px] md:w-[325px] xl:w-[350px] h-[160px] md:h-[200px] xl:h-[225px] absolute bg-white rounded-[17px] border overflow-hidden`}>
        <div className="text-[#0054BB] pluto-black flex w-full px-2 h-full flex-col justify-center items-center text-center text-lg">
          <p className="pluto-black uppercase text-lg md:text-xl xl:text-2xl whitespace-pre tracking-tighter leading-5">{props.pregunta}</p>
          <p className="text-xs md:text-sm xl:text-base whitespace-pre tracking-tighter">{props.categoria}</p>
          <div className="flex flex-row justify-center items-center gap-1 absolute bottom-2">
            <div className={`rounded-full aspect-square h-[9px] md:h-[11px] xl:h-[12px] ${props.index == 1 ? "border-[#0054BA] bg-[#0054BA]" : "border-[#D9D9D9] bg-transparent"} border`} />
            <div className={`rounded-full aspect-square h-[9px] md:h-[11px] xl:h-[12px] ${props.index == 2 ? "border-[#0054BA] bg-[#0054BA]" : "border-[#D9D9D9] bg-transparent"} border`} />
            <div className={`rounded-full aspect-square h-[9px] md:h-[11px] xl:h-[12px] ${props.index == 3 ? "border-[#0054BA] bg-[#0054BA]" : "border-[#D9D9D9] bg-transparent"} border`} />
          </div>
        </div>
      </div>}
    </>
  )
}
