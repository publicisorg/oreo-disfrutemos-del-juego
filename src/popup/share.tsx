import { useEffect, useState } from "react";
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';

function SharePopUp(props: any) {

    const [bgopacity, setBgOpacity] = useState("opacity-0");
    const [containerOpacity, setContainerOpacity] = useState("opacity-0 scale-0");

    useEffect(() => {
        setBgOpacity("opacity-100");
        setTimeout(() => {
            setContainerOpacity("opacity-100 scale-100");
        }, 300);
    }, [])

    function handleClose() {
        setContainerOpacity("opacity-0 scale-0");
        setTimeout(() => {
            setBgOpacity("opacity-0");
        }, 300);
        setTimeout(() => {
            props.setShowShare(false);
        }, 600);
    }

    return (
        <>
            <div className={`${bgopacity} z-[100] h-full bg-black/60 w-full absolute duration-300`}></div>
            <div className={`${containerOpacity} z-[100] h-full w-full absolute flex justify-center items-center duration-300 max-w-[400px]`}>
                <div className="w-[80%] bg-[#0055B0] relative rounded-3xl text-white duration-300">
                    <div className="absolute -top-10 mx-auto w-full flex justify-center items-center">
                        <img src="oreo.png" className="h-24" />
                    </div>
                    <div className="absolute top-6 right-6 cursor-pointer" onClick={handleClose}>
                        <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6801 1.81947C11.7801 1.72266 11.8599 1.60685 11.9148 1.47878C11.9697 1.35071 11.9987 1.21295 12 1.07354C12.0012 0.934136 11.9748 0.79587 11.9222 0.666813C11.8697 0.537756 11.792 0.420493 11.6938 0.321866C11.5956 0.223239 11.4787 0.145224 11.3501 0.0923716C11.2215 0.0395194 11.0837 0.0128894 10.9448 0.0140346C10.8058 0.0151799 10.6684 0.0440777 10.5407 0.0990422C10.413 0.154007 10.2975 0.233937 10.2009 0.334169L6.00593 4.54089L1.81238 0.334169C1.71656 0.231015 1.60101 0.148277 1.47262 0.0908924C1.34423 0.0335075 1.20564 0.00265073 1.06511 0.000163397C0.924573 -0.00232394 0.78498 0.0236092 0.654655 0.0764151C0.52433 0.129221 0.405942 0.207818 0.306555 0.307518C0.207167 0.407217 0.128816 0.525976 0.0761758 0.656711C0.0235352 0.787445 -0.00231666 0.927478 0.000162885 1.06845C0.00264243 1.20943 0.0334026 1.34846 0.0906078 1.47725C0.147813 1.60604 0.230291 1.72195 0.333123 1.81807L4.52388 6.02619L0.330332 10.2329C0.145453 10.4319 0.0448034 10.6952 0.0495876 10.9672C0.0543717 11.2392 0.164216 11.4987 0.35598 11.6911C0.547743 11.8834 0.806451 11.9936 1.0776 11.9984C1.34875 12.0032 1.61118 11.9023 1.80959 11.7168L6.00593 7.51009L10.1995 11.7182C10.3979 11.9037 10.6603 12.0046 10.9315 11.9998C11.2026 11.995 11.4613 11.8848 11.6531 11.6925C11.8448 11.5001 11.9547 11.2406 11.9595 10.9686C11.9643 10.6966 11.8636 10.4333 11.6787 10.2343L7.48797 6.02619L11.6801 1.81947Z" fill="white" />
                        </svg>
                    </div>
                    <div className="px-4 pt-20 pb-12 flex flex-col justify-center items-center gap-12">
                        <p className="text-center text-lg">¡Compartí el juego con<br />tus amigos/as!</p>
                        <div className="flex flex-row justify-center items-center gap-8">
                            <a id="shareTwitter" target="_blank" href="https://twitter.com/intent/tweet?text=Cuando%20conectamos%20a%20trav%C3%A9s%20del%20juego%20disfrutamos%20m%C3%A1s,%20por%20eso%20creamos%20un%20juego%20de%20cartas%20con%20diferentes%20consignas,%20desaf%C3%ADos%20y%20preguntas.%20Ingres%C3%A1%20a%20www.DisfrutemosDelJuego.com%20y%20descubr%C3%AD%20el%20nuevo%20juego%20de%20oreo.">
                                <div className="h-14 bg-gradient-to-r from-[#33CCFF] to-[#337fff] w-14 rounded-xl flex justify-center content-center items-center ">
                                    <FaTwitter size={32} />
                                </div>
                            </a>
                            <a id="shareWhatsapp" target="_blank" href="https://wa.me/?text=Cuando%20conectamos%20a%20trav%C3%A9s%20del%20juego%20disfrutamos%20m%C3%A1s,%20por%20eso%20creamos%20un%20juego%20de%20cartas%20con%20diferentes%20consignas,%20desaf%C3%ADos%20y%20preguntas.%20Ingres%C3%A1%20a%20www.DisfrutemosDelJuego.com%20y%20descubr%C3%AD%20el%20nuevo%20juego%20de%20oreo.">
                                <div className="h-14 bg-gradient-to-r from-[#60FC7C] to-[#4AB161] w-14 rounded-xl flex justify-center content-center items-center ">
                                    <FaWhatsapp size={32} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SharePopUp
