
import { useEffect } from "react";
import DiceBox from '@3d-dice/dice-box'

function Dice(props: any) {

    useEffect(() => {
        const diceBox = new DiceBox("#dice-box", {
            assetPath: "/assets/dice-box/", // required
            theme: "default",
            themeColor: '#EEEEEE',
            offscreen: true,
            scale: 8,
            mass: 0.9,
            friction: 0.8,
            throwForce: 10,
            startingHeight: 10,
            restitution: 0.75,
            lightIntensity: 1,
            shadowTransparency: 0.9
        });

        diceBox.init().then(() => {
            diceBox.roll('1d6');
            diceBox.onRollComplete = (results) => {
                props.setDiceResult(results[0].value);
            }
        });
    }, [])

    return (
        <div id="dice-box" className={`w-full h-full relative box-border duration-300`} />
    )
}

export default Dice
