import { useEffect, useState } from "react"
import colors from './colors.json'

function UI(props: any) {

    const [diceResultColor, setDiceResultColor] = useState('');
    const [buttonOpacity, setButtonOpacity] = useState("opacity-0 scale-0");
    const [showMessage, setShowMessage] = useState("opacity-0 scale-0");
    const [buttonLabel, setButtonLabel] = useState("EMPEZAR");

    useEffect(() => {
        setButtonOpacity('opacity-100 scale-100');
    }, [])

    function handleFlyOut() {
        if (props.diceStop && props.enableControls) {
            if (!props.tutorial) {
                props.changeCards(!props.value);
            } else {
                props.setTutorial(false);
                props.changeCards(!props.value);
            }
            handleNext();
        }
    }

    function handleNextTutorial() {
        if (props.tutorial) {
            props.changeCards(!props.value);
        }
    }

    function handleNext() {
        if (props.tutorial) {
            setButtonOpacity('opacity-0 scale-0');
            setTimeout(() => {
                setButtonLabel("SIGUIENTE PREGUNTA");
            }, 300);
            setTimeout(() => {
                setButtonOpacity('opacity-100 scale-100');
            }, 310);
        } else {
            setTimeout(() => {
                setButtonLabel("SIGUIENTE PREGUNTA");
            }, 300);
        }
    }

    useEffect(() => {
        setDiceResultColor(colors[props.diceResult].color);
        if (props.diceResult != 0 && props.diceStop) {
            setShowMessage("opacity-100 scale-100");
            setButtonOpacity("opacity-100 scale-100");
        } else {
            setShowMessage("opacity-0 scale-0");
        }
    }, [props.diceResult, props.diceStop])

    return (
        <>
            <div className="h-1/3 w-full top-0 absolute" onClick={() => handleNextTutorial()} />
            <div className="h-2/3 w-full bottom-0 absolute" onClick={() => handleFlyOut()} />
            <div className={`${showMessage} absolute bottom-[4.5rem] w-full flex justify-center items-center duration-300`}>
                <div className={`max-w-[300px] text-white text-[10px] uppercase duration-300 h-[45px] px-8 pt-1 rounded-full w-[260px] text-center flex justify-center items-center`} style={{ backgroundColor: diceResultColor }}>
                    {colors[props.diceResult].text}
                </div>
            </div>

            <div className={`${buttonOpacity} w-full bottom-0 text-white absolute flex justify-center items-center duration-300`}>
                <button className={`${props.enableControls ? "bg-[#F2F1F1] text-[#0054BA]" : "bg-[#b6b6b6] text-[#0054BA]"} duration-300 h-[50px] min-w-[150px] text-lg px-3 rounded-md absolute z-50 bottom-4 -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] pluto-black`} onClick={() => handleFlyOut()}>
                    <span className={`duration-300 pluto-black tracking-tighter`}>{buttonLabel}</span>
                </button>
            </div>
        </>
    )
}

export default UI
