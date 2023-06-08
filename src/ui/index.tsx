import { useEffect, useState } from "react"
import colors from './colors.json'

function UI(props: any) {

    const [diceResultColor, setDiceResultColor] = useState('');
    const [buttonOpacity, setButtonOpacity] = useState("opacity-0 scale-0");
    const [showMessage, setShowMessage] = useState("opacity-0 scale-0");

    function handleFlyOut() {
        props.changeCards(!props.value);
        setButtonOpacity("opacity-0 scale-0");
        setShowMessage("opacity-0 scale-0");
    }

    useEffect(() => {
        setDiceResultColor(colors[props.diceResult].color);
        if (props.diceResult != 0) {
            setShowMessage("opacity-100 scale-100");
        } else {
            setShowMessage("opacity-0 scale-0");
        }
        setTimeout(() => {
            setButtonOpacity("opacity-100 scale-100");
        }, 3000);
    }, [props.diceResult])

    return (
        <>
            <div className={`${showMessage} absolute bottom-36 w-full flex justify-center items-center duration-300`}>
                <div className={`text-white text-xs uppercase duration-300 py-4 px-8 rounded-full w-4/5 text-center shadow-lg`} style={{ backgroundColor: diceResultColor }}>
                    {colors[props.diceResult].text}
                </div>
            </div>

            <div className={`${buttonOpacity} w-full bottom-0 h-36 text-white absolute flex justify-center items-center duration-300`}>
                <button className="bg-white text-[#0054BA] text-xl py-2 px-4 rounded absolute z-50 bottom-12 -rotate-12 drop-shadow-lg pluto-black" onClick={() => handleFlyOut()}>
                    SIGUIENTE PREGUNTA
                </button>
            </div>
        </>
    )
}

export default UI
