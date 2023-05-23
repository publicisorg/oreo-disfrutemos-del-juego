import DiceBox from "@3d-dice/dice-box";
import { useEffect } from "react";

function Dice() {

    useEffect(() => {
        const diceBox = new DiceBox("#dice-box", {
            assetPath: "/assets/dice-box/", // required
            theme: "default",
            offscreen: true,
            scale: 6
        });

        diceBox.init().then(() => {
            diceBox.roll("1d6");
        });
    }, [])


    return (
        <div id="dice-box" className="w-full h-full relative box-border">

        </div>
    )
}

export default Dice
