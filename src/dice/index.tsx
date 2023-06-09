
import { useEffect, useState } from "react";
import DiceBox from '@3d-dice/dice-box'

function Dice(props: any) {

    const [diceBox, setDiceBox] = useState<any>([]);
    const [diceBoxReady, setDiceBoxReady] = useState<any>([]);

    useEffect(() => {

        setDiceBox(new DiceBox("#dice-box", {
            assetPath: "/assets/dice-box/", // required
            theme: "default",
            themeColor: '#FEFEFE',
            offscreen: true,
            scale: 11,
            mass: 2,
            friction: 0.8,
            startingHeight: 4,
            restitution: 0.75,
            lightIntensity: 1,
            shadowTransparency: 0.9
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
        <div id="dice-box" className={`w-full h-3/5 relative box-border duration-300`} />
    )
}

export default Dice
