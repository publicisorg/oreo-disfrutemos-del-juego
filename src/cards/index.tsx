import { useEffect, useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import styles from './styles.module.css'

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1900px) rotateX(-20deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck(props:any) {

  const [actualCards, setActualCards] = useState<any>([]);

  useEffect(() => {
    setActualCards([
      {
        titulo: "PASA A LA SIGUIENTE CARTA",
        descripcion: "Apretando el botón “siguiente” descubrís diferentes consignas para divertirte en familia.",
        pregunta: "Error",
        elementos: [
          {
            id: "3",
            categoria: "Tutorial"
          },
        ]
      },
      {
        titulo: "TIRÁ EL DADO",
        descripcion: "El color del dado determina qué pasa en el juego.",
        pregunta: "Error",
        elementos: [
          {
            id: "3",
            categoria: "Tutorial"
          },
        ]
      },
      {
        titulo: "SE JUEGA POR TURNO",
        descripcion: "Cuando veas la carta en pantalla, podés empezar.",
        pregunta: "Error",
        elementos: [
          {
            id: "3",
            categoria: "Tutorial"
          },
        ]
      }
    ]);
  }, [])

  const [gone] = useState(() => new Set());
  const [propsCards, api] = useSprings(actualCards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  useEffect(() => {
    if (gone.size === actualCards.length) return; // Todas las cartas ya han desaparecido

    const nextCardIndex = actualCards.length - gone.size - 1;
    gone.add(nextCardIndex);

    api.start((i) => {
      if (nextCardIndex !== i) return;

      const isGone = gone.has(nextCardIndex);
      //x es para que lado se va, si se elimina o modifica math random cambia la direccion
      //const x = isGone ? (100 + window.innerWidth) * (Math.random() > 0.5 ? 1 : -1) : 0;
      const x = isGone ? (100 + window.innerWidth) : 0;
      const rot = isGone ? (Math.random() > 0.5 ? 1 : -1) * 10 * Math.random() : 0;
      const scale = isGone ? 0.5 : 1;

      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: isGone ? 90 : 500 },
      };
    });

    if (gone.size === actualCards.length) {
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i));
      }, 300);
    }
  }, [props.changeCard])

  return (
    <>
      {!props.tutorial && propsCards.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div style={{ transform: interpolate([rot, scale], trans) }} className="text-center rounded-md p-[2px]">
            {actualCards[i].elementos.map((elemento) => (
              <p key={elemento.id} className="bg-[#0054BA] text-white rounded-t-md font-regular text-[10px] py-1">
                {elemento.categoria}
              </p>
            ))}
            <p className="text-[20px] text-[#0054BA] justify-center items-center font-bold mt-5 pluto-black w-9/12 mx-auto">
              {actualCards[i].pregunta}
            </p>
          </animated.div>
        </animated.div>
      ))}
      {props.tutorial && propsCards.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div style={{ transform: interpolate([rot, scale], trans) }} className="flex justify-center items-center flex-col rounded-md p-[2px]">
            <p className="text-[20px] text-[#0054BA] pluto-black justify-center items-center font-bold pluto-black w-5/6 mx-auto text-center">
              {actualCards[i].titulo}
            </p>
            <p className="text-[12px] text-[#0054BA] pluto justify-center items-center pluto-black w-5/6 mx-auto text-center">
              {actualCards[i].descripcion}
            </p>
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}

export default function Cards(props:any) {
  return (
    <div className={styles.container}>
      <Deck tutorial={props.tutorial} changeCard={props.changeCard}/>
    </div>
  );
}