import { useEffect, useState } from "react"
import colors from './colors.json'

function UI(props: any) {

    const [diceResultColor, setDiceResultColor] = useState('');
    const [buttonOpacity, setButtonOpacity] = useState("opacity-0 scale-0");
    const [opacity, setOpacity] = useState("opacity-100");
    const [showMessage, setShowMessage] = useState("opacity-0 scale-0");
    const [buttonLabel, setButtonLabel] = useState("EMPEZAR");

    function handleFlyOut() {
        if (props.diceStop) {
            if (!props.tutorial) {
                props.changeCards(!props.value);
            }
            setButtonOpacity("opacity-0 scale-0");
            setShowMessage("opacity-0 scale-0");
            handleNext();
        }
    }

    //props.setTutorialStage(props.tutorialStage + 1);

    function handleNext() {
        if (props.tutorial) {
            setOpacity('opacity-0');
            setTimeout(() => {
                setButtonLabel("SIGUIENTE PREGUNTA");
                props.setTutorialStage(4);
                setOpacity('opacity-100');
            }, 300);
        } else {
            setOpacity('opacity-0');
            setTimeout(() => {
                setButtonLabel("SIGUIENTE PREGUNTA");
            }, 300);
            setTimeout(() => {
                setOpacity('opacity-100');
            }, 310);
        }
    }

    useEffect(() => {
        if (props.tutorial && props.tutorialStage < 4) {
            setButtonOpacity("opacity-100 scale-100");
        }
    }, [props.tutorialStage])

    useEffect(() => {
        setDiceResultColor(colors[props.diceResult].color);
        if (props.diceResult != 0 && props.diceStop) {
            setShowMessage("opacity-100 scale-100");
            setButtonOpacity("opacity-100 scale-100");
            console.log("ESTO?");
        } else {
            setShowMessage("opacity-0 scale-0");
        }
    }, [props.diceResult, props.diceStop])

    return (
        <>
            <div className="h-2/3 w-full bottom-0 absolute" onClick={() => handleFlyOut()}>

            </div>
            <div className={`${showMessage} absolute bottom-24 w-full flex justify-center items-center duration-300`}>
                <div className={`max-w-[300px] text-white text-xs uppercase duration-300 py-4 px-8 rounded-full w-4/5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)]`} style={{ backgroundColor: diceResultColor }}>
                    {colors[props.diceResult].text}
                </div>
            </div>

            <div className={`${buttonOpacity} w-full bottom-0 h-24 text-white absolute flex justify-center items-center duration-300`}>
                <button className="bg-[#F2F1F1] text-[#0054BA] text-xl py-3 px-6 rounded absolute z-50 bottom-4 -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] pluto-black" onClick={() => handleFlyOut()}>
                    <span className={`duration-300 pluto-black ${opacity}`}>{buttonLabel}</span>
                </button>
            </div>
        </>
    )
}

export default UI
