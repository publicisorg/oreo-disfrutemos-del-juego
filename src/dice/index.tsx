import DiceBox from "@3d-dice/dice-box";
import { useEffect } from "react";

function Dice() {
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
        });
        
        diceBox.init().then(() => {
            diceBox.roll("1d6");
            diceBox.onRollComplete = (rollResult) => console.log(rollResult[0].value)
        });

    }, [])

    return (
        <div id="dice-box" className="w-full h-1/2 relative box-border">

        </div>
    )
}

export default Dice
