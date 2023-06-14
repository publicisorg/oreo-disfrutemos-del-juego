
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
            offscreen: false,
            scale: 11,
            mass: 0.9,
            friction: 0.8,
            throwForce: 10,
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
            if ((props.tutorialStage == 2 && props.tutorial == true) || props.tutorial == false) {
                diceBox.roll('1d6');
                diceBox.onRollComplete = (results) => {
                    props.setDiceResult(results[0].value);
                }
            }
        }
    }, [props.refreshDice])

    return (
        <div id="dice-box" className={`w-full h-3/5 relative box-border duration-300`} />
    )
}

export default Dice
