import { useState } from 'react';

function Home(props: any) {

    const [opacity, setOpacity] = useState('opacity-100');
    const [rotation, setRotation] = useState('rotate-0');
    const [rotationButton, setRotationButton] = useState('-rotate-6');
    const [scale, setScale] = useState('scale-100');
    const [duration, setDuration] = useState('duration-300');


    function hideHome() {
        setDuration('duration-200');
        setScale('scale-110');
        setRotation('rotate-12');
        setRotationButton('-rotate-12');
        setTimeout(() => {
            setDuration('duration-500');
            setScale('scale-0');
            setRotation('-rotate-180');
            setRotationButton('rotate-180');
        }, 200);
        setTimeout(() => {
            setOpacity('opacity-0');
        }, 700);
        setTimeout(() => {
            props.setStart(true);
        }, 1000);
    }

    return (
        <div className="relative mx-autoh-screen w-full lg:h-full lg:w-[400px]">
            <div className={`w-full h-full inset-0 flex justify-center items-center text-white text-6xl relative duration-300 ${opacity}`}>
                <div className="relative flex justify-center items-center">
                    <h1 className={`pluto-black text-center ${rotation} ${scale} ${duration}`}>EL JUEGO DE OREO</h1>
                    <button onClick={() => { hideHome() }}
                        className={`bg-white text-[#0054BA] text-2xl py-3 px-6 rounded absolute -bottom-12 mx-auto z-50 pluto-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] ${scale} ${rotationButton} ${duration}`}>
                        ¡JUGUEMOS!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home
