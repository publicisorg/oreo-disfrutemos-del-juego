import { useEffect, useState } from 'react';
import { FooterStart } from '../common/Footer';
import { Header } from '../common/Header/Header';

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
        
            <div className="relative mx-auto border-slate-800 dark:border-slate-800 lg:bg-[#0054BB] lg:border-[14px] lg:rounded-[2.5rem] h-screen w-full lg:h-full lg:w-[400px] lg:shadow-lg">
                <div className="hidden lg:block h-[32px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="hidden lg:block h-[46px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="hidden lg:block h-[46px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="hidden lg:block h-[64px] w-[3px] bg-slate-700 dark:bg-slate-700 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="hidden lg:block rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-[#0054BB] dark:bg-[#0054BB]"></div>
                <div className="z-50 absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center overflow-hidden">
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
            </div>
            
    );
}

export default Home
