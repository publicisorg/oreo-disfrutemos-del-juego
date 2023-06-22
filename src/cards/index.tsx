import { useEffect, useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import styles from './styles.module.css'
import preguntas from './cards.json'
import CardsBackground from './background';

function Deck(props: any) {

  const [cardsFall, setCardsFall] = useState(-1000);
  const [cardsScale, setCardsScale] = useState(1.5);
  const [cardsDelay, setCardsDelay] = useState(100);

  const to = (i) => ({
    x: 0,
    y: 0,//i * -4,
    scale: 1,
    rot: 0,//-10 + Math.random() * 20,
    delay: i * cardsDelay,
  });

  const from = (_i) => ({ x: 0, rot: 0, scale: cardsScale, y: cardsFall });

  const trans = (r, s) =>
    `perspective(none) rotateX(-20deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

  const [actualCards, setActualCards] = useState<any>([]);

  useEffect(() => {
    setActualCards([
      {
        titulo: "PASA A LA SIGUIENTE CARTA",
        descripcion: "Apretando el botón “siguiente” descubrís diferentes consignas para divertirte en familia.",
        pregunta: "Pregunta",
        index: 3,
        categoria: "Categoria"
      },
      {
        titulo: "TIRÁ EL DADO",
        descripcion: "El color del dado determina qué pasa en el juego.",
        pregunta: "Pregunta",
        index: 2,
        categoria: "Categoria"
      },
      {
        titulo: "SE JUEGA POR TURNO",
        descripcion: "Cuando veas la carta en pantalla, podés empezar.",
        pregunta: "Pregunta",
        index: 1,
        categoria: "Categoria"
      }
    ]);
  }, [])

  useEffect(() => {
    if (!props.tutorial) {
      setCardsFall(-1000);
      setCardsScale(1);
      setCardsDelay(5);
      const auxCards: any = [];
      for (var i = 0; i < 100; i++) {
        auxCards.push(preguntas[Math.floor(Math.random() * 100)]);
      }
      setActualCards(auxCards);
      /*setActualCards(
        [
          preguntas[Math.floor(Math.random() * 100)],
          preguntas[Math.floor(Math.random() * 100)],
          preguntas[Math.floor(Math.random() * 100)]
        ]
      )*/
    }
  }, [props.tutorial])

  const [gone] = useState(() => new Set());
  const [propsCards, api] = useSprings(actualCards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  useEffect(() => {
    if (gone.size === actualCards.length) return; // Todas las cartas ya han desaparecido

    const nextCardIndex = actualCards.length - gone.size - 1;
    if (!props.tutorial) {
      props.setCardsCount(props.countCards + 1);
    }
    gone.add(nextCardIndex);

    api.start((i) => {
      if (nextCardIndex !== i) return;

      const isGone = gone.has(nextCardIndex);
      //x es para que lado se va, si se elimina o modifica math random cambia la direccion
      //const x = isGone ? (100 + window.innerWidth) * (Math.random() > 0.5 ? 1 : -1) : 0;
      const x = isGone ? (100 + window.innerWidth) : 0;
      const rot = isGone ? 0 : 0; //(Math.random() > 0.5 ? 1 : -1) * 10 * Math.random() : 0;
      const scale = isGone ? 0.5 : 1;

      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: isGone ? 90 : 500 },
      };
    });

    /*if (!props.tutorial) {
      setActualCards(
        [
          preguntas[Math.floor(Math.random() * 100)],
          actualCards[0],
          actualCards[1]
        ]
      )
    }*/

    if (gone.size === actualCards.length) {
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i));
      }, 300);
    }
  }, [props.changeCard])

  return (
    <>
      <CardsBackground />
      <div className={`${styles.deck} mt-2`}>
          <div className="text-center rounded-[17px] p-[2px]" style={{boxShadow: '0 1px 1px 2px rgba(50, 50, 73, 0.15), 0 10px 10px -10px rgba(50, 50, 73, 0.3)'}}>
            <p className="bg-[#0054BA] text-white rounded-t-[15px] font-regular text-[12px] py-1 uppercase">
              
            </p>
            <p className="text-[16px] text-[#0054BA] justify-center items-center font-bold pluto-black mx-auto w-11/12 h-[85%] flex uppercase">
              
            </p>
          </div>
        </div>
      {!props.tutorial && propsCards.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div style={{ transform: interpolate([rot, scale], trans) }} className="text-center rounded-[16px] p-[1px]">
            <p key={actualCards[i].id} className="bg-[#0054BA] text-white rounded-t-[15px] font-regular text-[12px] py-1 uppercase">
              {actualCards[i].categoria}
            </p>
            <p className="text-[16px] text-[#0054BA] justify-center items-center font-bold pluto-black mx-auto w-11/12 h-[85%] flex uppercase">
              {actualCards[i].pregunta}
            </p>
          </animated.div>
        </animated.div>
      ))}
      {props.tutorial && propsCards.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div style={{ transform: interpolate([rot, scale], trans) }} className="flex justify-center items-center flex-col rounded-[17px] p-[2px]">
            <p className="text-[20px] text-[#0054BA] pluto-black justify-center items-center font-bold pluto-black w-5/6 mx-auto text-center">
              {actualCards[i].titulo}
            </p>
            <p className="text-[12px] text-[#0054BA] pluto justify-center items-center pluto-black w-5/6 mx-auto text-center">
              {actualCards[i].descripcion}
            </p>
            <div className='flex flex-row justify-center items-center w-full gap-1 absolute bottom-2'>
              <div className={`rounded-full aspect-square h-3 ${actualCards[i].index == 1 ? "border-[#0054BA] bg-[#0054BA]" : "border-[#D9D9D9] bg-transparent"} border-2`} />
              <div className={`rounded-full aspect-square h-3 ${actualCards[i].index == 2 ? "border-[#0054BA] bg-[#0054BA]" : "border-[#D9D9D9] bg-transparent"} border-2`} />
              <div className={`rounded-full aspect-square h-3 ${actualCards[i].index == 3 ? "border-[#0054BA] bg-[#0054BA]" : "border-[#D9D9D9] bg-transparent"} border-2`} />
            </div>
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}

export default function Cards(props: any) {
  return (
    <div className={styles.container}>
      <Deck tutorial={props.tutorial} changeCard={props.changeCard} setCardsCount={props.setCardsCount} countCards={props.countCards} />
    </div>
  );
}