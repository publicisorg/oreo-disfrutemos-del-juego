import DiceBox from "@3d-dice/dice-box";
import { useEffect, useState } from "react";

function Dice() {

    const [isDiceInit, setDiceInit] = useState(false);

    useEffect(() => {
        const diceBox = new DiceBox("#dice-box", {
            assetPath: "/assets/dice-box/", // required
            theme: "default",
            themeColor: '#e7e6ca',
            offscreen: true,
            scale: 4,
            mass: 0.9,
            friction: 0.8,
            throwForce: 10,
            startingHeight: 10,
            restitution: 0.75,
        });

        if (!isDiceInit) {
            diceBox.init().then(() => {
                setDiceInit(true);
                diceBox.roll("1d6");
            });
        }

    }, [])


    return (
        <div id="dice-box" className="w-full h-full relative box-border">

        </div>
    )
}

export default Dice
