
import { useEffect, useState } from "react";
import DiceBox from '../diceboxCompiled/dice-box.es.js'
import useSound from 'use-sound';

function Dice(props: any) {
    const [diceBox, setDiceBox] = useState<any>([]);
    const [diceBoxReady, setDiceBoxReady] = useState<any>([]);
    const [prepareDiceSound] = useSound('./assets/sounds/dice.mp3', { volume: 0.10 });

    function newDiceScale() {
        var diceScale = 9;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const absoluteResolution = width * height;
        if (absoluteResolution > 0 && absoluteResolution <= 786432) {
            diceScale = 12;
        }
        if (absoluteResolution > 786432 && absoluteResolution <= 921600) {
            diceScale = 9;
        }
        if (absoluteResolution > 921600 && absoluteResolution <= 1296000) {
            diceScale = 13;
        }
        if (absoluteResolution > 921600) {
            diceScale = 12;
        }
        console.log
        return diceScale;
    }

    useEffect(() => {
        var diceScale = newDiceScale();
        setDiceBox(new DiceBox("#dice-box", {
            assetPath: "/assets/dice-box/", // required
            theme: "default",
            themeColor: '#FEFEFE',
            offscreen: true,
            scale: diceScale,
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
                props.setDiceStop(false);
                prepareDiceSound();
                diceBox.roll('1d6');
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
