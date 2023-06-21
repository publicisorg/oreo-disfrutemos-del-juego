import { useEffect, useState } from "react";

function DatosPersonales(props: any) {

    const [showThanks, setShowThanks] = useState(false);
    const [bgopacity, setBgOpacity] = useState("opacity-0");
    const [formOpacity, setFormOpacity] = useState("opacity-0");
    const [thanksOpacity, setThanksOpacity] = useState("opacity-0");
    const [tickAnim, setTickAnim] = useState("scale-0 stroke-lime-900 rotate-12");
    const [tickDuration, setTickDuration] = useState("duration-500");
    const [containerOpacity, setContainerOpacity] = useState("opacity-0 scale-0");

    useEffect(() => {
        setBgOpacity("opacity-100");
        setTimeout(() => {
            setContainerOpacity("opacity-100 scale-100");
            setFormOpacity("opacity-100");
        }, 300);
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        setFormOpacity("opacity-0");
        setTimeout(() => {
            setShowThanks(true);
        }, 300);
        setTimeout(() => {
            setThanksOpacity("opacity-100");
        }, 310);
        setTimeout(() => {
            tickAnimation();
        }, 600);
    }

    function handleClose() {
        setThanksOpacity("opacity-0");
        setFormOpacity("opacity-0");
        setContainerOpacity("opacity-0 scale-0");
        setTimeout(() => {
            setBgOpacity("opacity-0");
        }, 300);
        setTimeout(() => {
            props.setShowPopup(false);
        }, 600);
    }

    function tickAnimation() {
        setTickAnim("scale-110 stroke-lime-400 -rotate-3");
        setTimeout(() => {
            setTickDuration("duration-200");
            setTickAnim("scale-100 stroke-white rotate-0");
        }, 500);
    }

    return (
        <>
            <div className={`${bgopacity} z-[100] h-full bg-black/60 w-full max-w-[400px] absolute duration-300`}></div>
            <div className={`${containerOpacity} z-[100] h-full w-full absolute flex justify-center items-center duration-300`}>
                <div className="w-[90%] bg-[#0055B0] relative rounded-3xl text-white duration-300">
                    <div className="absolute -top-10 mx-auto w-full flex justify-center items-center">
                        <img src="oreo.png" className="h-24" />
                    </div>
                    <div className="absolute top-6 right-6 cursor-pointer" onClick={handleClose}>
                        <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6801 1.81947C11.7801 1.72266 11.8599 1.60685 11.9148 1.47878C11.9697 1.35071 11.9987 1.21295 12 1.07354C12.0012 0.934136 11.9748 0.79587 11.9222 0.666813C11.8697 0.537756 11.792 0.420493 11.6938 0.321866C11.5956 0.223239 11.4787 0.145224 11.3501 0.0923716C11.2215 0.0395194 11.0837 0.0128894 10.9448 0.0140346C10.8058 0.0151799 10.6684 0.0440777 10.5407 0.0990422C10.413 0.154007 10.2975 0.233937 10.2009 0.334169L6.00593 4.54089L1.81238 0.334169C1.71656 0.231015 1.60101 0.148277 1.47262 0.0908924C1.34423 0.0335075 1.20564 0.00265073 1.06511 0.000163397C0.924573 -0.00232394 0.78498 0.0236092 0.654655 0.0764151C0.52433 0.129221 0.405942 0.207818 0.306555 0.307518C0.207167 0.407217 0.128816 0.525976 0.0761758 0.656711C0.0235352 0.787445 -0.00231666 0.927478 0.000162885 1.06845C0.00264243 1.20943 0.0334026 1.34846 0.0906078 1.47725C0.147813 1.60604 0.230291 1.72195 0.333123 1.81807L4.52388 6.02619L0.330332 10.2329C0.145453 10.4319 0.0448034 10.6952 0.0495876 10.9672C0.0543717 11.2392 0.164216 11.4987 0.35598 11.6911C0.547743 11.8834 0.806451 11.9936 1.0776 11.9984C1.34875 12.0032 1.61118 11.9023 1.80959 11.7168L6.00593 7.51009L10.1995 11.7182C10.3979 11.9037 10.6603 12.0046 10.9315 11.9998C11.2026 11.995 11.4613 11.8848 11.6531 11.6925C11.8448 11.5001 11.9547 11.2406 11.9595 10.9686C11.9643 10.6966 11.8636 10.4333 11.6787 10.2343L7.48797 6.02619L11.6801 1.81947Z" fill="white" />
                        </svg>
                    </div>
                    {showThanks && <div className={`${thanksOpacity} py-20 flex justify-center items-center flex-col gap-4 duration-300`}>
                        <div className={`${thanksOpacity} flex flex-col justify-center items-center gap-4`}>
                            <p className="text-2xl text-center">¡GRACIAS<br />
                                POR PARTICIPAR!</p>
                            <p className="text-sm text-center">
                                Sigamos disfrutando del juego.
                            </p>
                            <div className="relative">
                                <svg className="stroke-white stroke-[8px]" strokeLinecap="round" width="112" height="101" viewBox="0 0 112 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.5556 84.7222H16.3889C13.3684 84.7222 10.4716 83.5223 8.33573 81.3865C6.1999 79.2507 5 76.3539 5 73.3333V16.3889C5 13.3684 6.1999 10.4716 8.33573 8.33573C10.4716 6.1999 13.3684 5 16.3889 5H96.1111C99.1316 5 102.028 6.1999 104.164 8.33573C106.3 10.4716 107.5 13.3684 107.5 16.3889V50.5556" />
                                    <path d="M5 16.3892L56.25 50.5558L107.5 16.3892M73.3333" />

                                </svg>
                                <svg className="stroke-white stroke-[8px] fill-none absolute top-0" strokeLinecap="round">
                                    <path className={`${tickAnim} ${tickDuration}`} d="M5 16.3892M73.3333 84.7225L84.7222 96.1114L107.5 73.3336" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 mx-auto w-full flex justify-center items-center">
                            <button onClick={handleClose} className="bg-[#F2F1F1] text-[#0054BA] text-xl py-3 px-6 rounded z-50 bottom-4 -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] pluto-black">
                                <span className={`duration-300 pluto-black`}>CONTINUAR</span>
                            </button>
                        </div>
                    </div>}
                    {!showThanks && <form className={`${formOpacity} duration-300`} onSubmit={(e) => handleSubmit(e)}>
                        <div className="py-20 flex justify-center items-center flex-col gap-4">
                            <p className="w-2/3 text-xl text-center">¡Participa del sorteo <br />
                                y gana el juego Oreo, <br />
                                en versión física!</p>
                            <p className="text-sm">
                                Completá con tus datos.
                            </p>
                            <input required placeholder="E-mail" name="mail" id="mail" className="bg-white !text-[#0055B0] rounded-3xl px-4 py-2 w-[80%]" />
                            <div className="w-full flex flex-col justify-start items-center gap-2">
                                <div className="flex flex-row justify-start items-center gap-2 w-3/4">
                                    <input required id="mayor" name="mayor" type="checkbox" />
                                    <label className="text-xs font-light" htmlFor="mayor">Soy mayor de 18 años</label>
                                </div>
                                <div className="flex flex-row justify-start items-center gap-2 w-3/4">
                                    <input id="novedades" name="novedades" type="checkbox" />
                                    <label className="text-xs font-light" htmlFor="novedades">Acepto recibir novedades e información de Oreo.</label>
                                </div>
                                <div className="flex flex-row justify-start items-center gap-2 w-3/4">
                                    <input required id="politica" name="politica" type="checkbox" />
                                    <label className="text-xs font-light" htmlFor="politica">Acepto <a href="#" className="underline" target="_blank">la Política de privacidad de Oreo.</a></label>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 mx-auto w-full flex justify-center items-center">
                            <button type="submit" value="Submit" className="bg-[#F2F1F1] text-[#0054BA] text-xl py-3 px-6 rounded z-50 bottom-4 -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] pluto-black">
                                <span className={`duration-300 pluto-black`}>CONTINUAR</span>
                            </button>
                        </div>
                        <p className="underline text-xs text-white absolute -bottom-16 w-full text-center" onClick={handleClose}>Continuar sin suscribirme</p>
                    </form>}
                </div>
            </div>
        </>
    );
}

export default DatosPersonales
