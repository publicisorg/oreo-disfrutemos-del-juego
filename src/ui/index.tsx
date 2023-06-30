import { useEffect, useState } from "react"
import colors from './colors.json'
import useSound from 'use-sound';

function UI(props: any) {

    const [diceResultColor, setDiceResultColor] = useState('');
    const [buttonOpacity, setButtonOpacity] = useState("opacity-0 scale-0");
    const [showMessage, setShowMessage] = useState("opacity-0 scale-0");
    const [buttonLabel, setButtonLabel] = useState("EMPEZAR");

    const [buttonSound] = useSound('./assets/sounds/disabled2.mp3', { volume: 0.10 });
    const [colorSound] = useSound('./assets/sounds/color.mp3', { volume: 0.10 });
    const [buttonDisabledSound] = useSound('./assets/sounds/disabled.mp3', { volume: 0.10 });

    useEffect(() => {
        setButtonOpacity('opacity-100 scale-100');
    }, [])

    function handleFlyOut() {
        if (props.diceStop && props.enableControls) {
            if (!props.tutorial) {
                props.changeCards(!props.value);
                buttonSound();
            } else {
                buttonSound();
                props.setTutorial(false);
                props.changeCards(!props.value);
            }
            handleNext();
        } else {
            if (props.tutorial) {
                props.setQueueAction(true);
                handleNext();
            }
            buttonDisabledSound();
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
            colorSound();
            setShowMessage("opacity-100 scale-100");
            setButtonOpacity("opacity-100 scale-100");
        } else {
            setShowMessage("opacity-0 scale-0");
        }
    }, [props.diceResult, props.diceStop])

    return (
        <>
            <div className="flex flex-col w-full h-full">
                <div className="h-2/5 w-full" onClick={() => handleNextTutorial()} />
                <div className="h-2/5 xl:h-3/5 w-full" onClick={() => handleFlyOut()} />
            </div>
            <div className={`${showMessage} absolute bottom-[5.2rem] lg:bottom-[5.8rem] w-full flex justify-center items-center duration-300`}>
                <div className={`max-w-[450px] text-white text-[10px] lg:text-xs uppercase duration-300 h-[55px] px-8 pt-1 rounded-full w-[320px] text-center flex justify-center items-center`} style={{ backgroundColor: diceResultColor }}>
                    {colors[props.diceResult].text}
                </div>
            </div>

            <div className={`${buttonOpacity} w-full bottom-0 text-white absolute flex justify-center items-center duration-300`}>
                <button
                    className={`${props.diceStop ? "bg-[#F2F1F1] text-[#0054BA]" : "bg-[#b6b6b6] text-[#0054BA]"} duration-300 h-[60px] lg:h-[70px] min-w-[170px] lg:min-w-[215px] text-2xl px-3 rounded-md absolute z-50 bottom-4 -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] pluto-black`}
                    onClick={() => handleFlyOut()}>
                    <span className={`duration-300 pluto-black tracking-tighter`}>{buttonLabel}</span>
                </button>
            </div>
        </>
    )
}

export default UI
