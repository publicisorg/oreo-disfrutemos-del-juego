import { useEffect, useState } from "react"
import cards from "./cards.json"

export const CardsNew = (props: any) => {

  const [actualCard, setActualCard] = useState<any>([]);
  const [AnimatedCard, setAnimatedCard] = useState<any>([]);
  const [duration, setDuration] = useState("duration-1000");
  const [duration2, setDuration2] = useState("duration-1000");
  const [duration3, setDuration3] = useState("duration-1000");
  const [duration4, setDuration4] = useState("duration-1000");
  const [animations, setAnimations] = useState("-top-[1000px] scale-110");
  const [animations2, setAnimations2] = useState("-top-[1000px] scale-110");
  const [animations3, setAnimations3] = useState("-top-[1000px] scale-110");
  const [animations4, setAnimations4] = useState("-top-[1000px] scale-110");

  useEffect(() => {
    const selectCard = Math.floor(Math.random() * 100);
    setActualCard(cards[selectCard]);
    setAnimatedCard(cards[selectCard]);
    setAnimations4("top-0 scale-100");
    setTimeout(() => {
      setAnimations3("top-0 scale-100");
    }, 100);
    setTimeout(() => {
      setAnimations2("top-0 scale-100");
    }, 200);
    setTimeout(() => {
      setAnimations("top-0 scale-100");
    }, 300);
  } ,[])

  useEffect(() => {
    setDuration2("duration-0");
    setDuration3("duration-0");
    setDuration4("duration-0");
    setDuration('duration-300');
    const selectCard = Math.floor(Math.random() * 100);
    setActualCard(cards[selectCard]);
    setTimeout(() => {
      setAnimations("-rotate-6 right-6");
    }, 50);
    setTimeout(() => {
      setDuration('duration-1000');
      setAnimations("rotate-[45deg] -right-[1000px]");
    }, 1000);
    setTimeout(() => {
      setAnimatedCard(cards[selectCard]);
      setDuration('duration-0');
      setAnimations("left-0 right-0 rotate-0");
    }, 2000);
  }, [props.changeCard])

  return (
    <div className="relative w-full h-full text-white">
      <SingleCard duration={duration} animations={animations} categoria={AnimatedCard.categoria} pregunta={AnimatedCard.pregunta} className="m-auto left-0 right-0 z-50 shadow-[0px_0px_3px_2px_#00000015]"/>
      <SingleCard duration={duration2} animations={animations2} categoria={actualCard.categoria} pregunta={actualCard.pregunta} className="m-auto left-0 right-0 z-40 shadow-[0px_0px_3px_2px_#00000015]"/>
      <SingleCard duration={duration3} animations={animations3} categoria={actualCard.categoria} pregunta={actualCard.pregunta} className="-rotate-6 m-auto top-0 left-4 right-0 z-30 shadow-[0px_0px_3px_2px_#00000030]"/>
      <SingleCard duration={duration4} animations={animations4} categoria={actualCard.categoria} pregunta={actualCard.pregunta} className="rotate-[9deg] m-auto top-2 left-0 right-0 z-20 shadow-[0px_0px_3px_2px_#00000030]"/>
    </div>
  )
}

export const SingleCard = (props: any) => {
  return (
    <div className={`${props.className} ${props.duration} ${props.animations} w-[290px] h-[160px] absolute bg-white rounded-[17px] border overflow-hidden`}>
      <div className="aboslute top-0 bg-[#0054BB] w-full h-[25px] flex justify-center items-center text-[10px]">
        {props.categoria}
      </div>
      <div className="text-[#0054BB] pluto-black flex w-full px-2 h-[80%] justify-center items-center text-center uppercase text-[15px]">
        {props.pregunta}
      </div>
    </div>
  )
}