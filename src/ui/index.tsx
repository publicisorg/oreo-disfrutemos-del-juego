import { useEffect, useState } from "react"
import colors from './colors.json'

function UI(props: any) {

    const [diceResultColor, setDiceResultColor] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    function handleFlyOut() {
        props.changeCards(!props.value)
    }

    useEffect(() => {
        setDiceResultColor(colors[props.diceResult].color);
        if (props.diceResult != 0) {
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
    }, [props.diceResult])

    return (
        <>
            {showMessage &&
                <div className="absolute bottom-36 w-full flex justify-center items-center">
                    <div className={`${diceResultColor} text-white text-sm uppercase duration-300 py-4 px-8 rounded-full w-4/5 text-center shadow-lg`}>
                        {colors[props.diceResult].text}
                    </div>
                </div>
            }
            <div className="w-full bottom-0 h-36 text-white absolute flex justify-center items-center">
                <button className="bg-white text-[#0054BA] text-xl py-2 px-4 rounded absolute z-50 bottom-12 -rotate-12 drop-shadow-lg pluto-black" onClick={() => handleFlyOut()}>
                    SIGUIENTE PREGUNTA
                </button>
            </div>
        </>
    )
}

export default UI
