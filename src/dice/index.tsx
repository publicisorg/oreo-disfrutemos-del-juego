
import { useEffect, useState } from "react";
import DiceBox from '../diceboxCompiled/dice-box.es.js'
import useSound from 'use-sound';

function Dice(props: any) {

    const [diceBox, setDiceBox] = useState<any>([]);
    const [diceBoxReady, setDiceBoxReady] = useState<any>([]);
    const [prepareDiceSound] = useSound('./assets/sounds/dice.mp3', { volume: 0.10 });

    useEffect(() => {
        setDiceBox(new DiceBox("#dice-box", {
            assetPath: "/assets/dice-box/", // required
            theme: "default",
            themeColor: '#FEFEFE',
            offscreen: true,
            scale: 9,
            lightIntensity: 1,
            shadowTransparency: 0.9,
            throwForce: 2
        }))
    }, [])

    useEffect(() => {
        
        if (diceBox?.length != 0) {
            diceBox.init().then(() => {
                setDiceBoxReady(true);
            });
        }
    }, [diceBox])

    useEffect(() => {
        if (diceBoxReady) {
            if (!props.tutorial) {
                prepareDiceSound();
                diceBox.roll('1d6');
                props.setDiceStop(false);
                diceBox.onDieComplete = (results) => {
                    props.setDiceResult(results.value);
                    props.setDiceStop(true);
                }
            }
        }
    }, [props.refreshDice])

    return (
        <div id="dice-box" className={`w-full h-3/5 md:h-2/3 lg:h-full relative box-border duration-300`} />
    )
}

export default Dice
