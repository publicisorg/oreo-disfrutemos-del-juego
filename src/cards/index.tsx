import { useEffect, useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import styles from './styles.module.css'

const cards = [
  {
    pregunta: "Pregunta 1",
    elementos: [
      {
        id: "1",
        categoria: "Categora 1"
      },

    ]
  },
  {
    pregunta: "Pregunta 2",
    elementos: [
      {
        id: "2",
        categoria: "Categora 2"
      },

    ]
  },
  {
    pregunta: "Pregunta 3",
    elementos: [
      {
        id: "2",
        categoria: "Categora 3"
      },

    ]
  },
  {
    pregunta: "Pregunta 4",
    elementos: [
      {
        id: "2",
        categoria: "Categora 1"
      },

    ]
  },
  {
    pregunta: "Pregunta 5",
    elementos: [
      {
        id: "2",
        categoria: "Categora 1"
      },

    ]
  },
  {
    pregunta: "SOS FELIZ CUANDO EN LA MERIENDA HAY ...",
    elementos: [
      {
        id: "2",
        categoria: "PARA COMPARTIR"
      },

    ]
  },
]

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
  const [gone] = useState(() => new Set());
  const [propsCards, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  useEffect(() => {
    if (gone.size === cards.length) return; // Todas las cartas ya han desaparecido

    const nextCardIndex = cards.length - gone.size - 1;
    gone.add(nextCardIndex);

    api.start((i) => {
      if (nextCardIndex !== i) return;

      const isGone = gone.has(nextCardIndex);
      const x = isGone ? (100 + window.innerWidth) * (Math.random() > 0.5 ? 1 : -1) : 0;
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

    if (gone.size === cards.length) {
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i));
      }, 300);
    }
  }, [props.changeCard])

  return (
    <>
      {propsCards.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div style={{ transform: interpolate([rot, scale], trans) }} className="text-center rounded-md p-[2px]">
            {cards[i].elementos.map((elemento) => (
              <p key={elemento.id} className="bg-[#0054BA] text-white rounded-t-md font-regular text-[10px] py-1">
                {elemento.categoria}
              </p>
            ))}
            <p className="text-[20px] text-[#0054BA] justify-center items-center font-bold mt-5 pluto-black w-9/12 mx-auto">
              {cards[i].pregunta}
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
      <Deck changeCard={props.changeCard}/>
    </div>
  );
}