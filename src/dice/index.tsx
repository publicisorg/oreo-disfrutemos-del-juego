
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
            scale: 6,
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
        <div id="dice-box" className={`w-full absolute h-full mx-auto box-border duration-300`} />
    )
}

export default Dice
