import { useState } from 'react';
import useSound from 'use-sound';

function Home(props: any) {

    const [opacity, setOpacity] = useState('opacity-100');
    const [rotation, setRotation] = useState('rotate-0');
    const [scale, setScale] = useState('scale-100');
    const [duration, setDuration] = useState('duration-300');
    const [playSound] = useSound('./assets/sounds/button.mp3',{ volume: 0.10 });

    function hideHome() {
        setDuration('duration-200');
        setScale('scale-110');
        setRotation('rotate-12');
        setTimeout(() => {
            playSound();
            setDuration('duration-500');
            setScale('scale-0');
            setRotation('-rotate-180');
        }, 200);
        setTimeout(() => {
            setOpacity('opacity-0');
        }, 700);
        setTimeout(() => {
            props.setStart(true);
        }, 1000);
    }

    return (
        <div className="relative mx-autoh-screen w-full h-full">
            <div className={`w-full h-full inset-0 flex justify-center items-center text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl relative duration-300 ${opacity}`}>
                <div className={`relative flex justify-center items-center ${rotation} ${scale} ${duration} mb-[75px] lg:mb-[15px]`}>
                    <h1 className={`pluto-black text-center tracking-tighter leading-[50px] md:leading-[56px] lg:leading-[75px] xl:leading-[95px]`}>EL JUEGO<br/>DE OREO</h1>
                    <button onClick={() => { hideHome() }}
                        className={`bg-[#F2F1F1] text-[#0054BA] text-2xl lg:text-3xl xl:text-4xl py-3 px-4 xl:py-5 xl:px-5 rounded-md absolute -bottom-12 lg:-bottom-[55px] xl:-bottom-[75px] mx-auto z-50 tracking-tighter pluto-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] -rotate-6`}>
                        ¡JUGUEMOS!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home
