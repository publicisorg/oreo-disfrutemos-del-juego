
export const Header = (props:any) => {
  return (
    <div className="z-[100] md:flex md:justify-between md:w-full md:absolute md:top-0">
      <img src="./oreo.png" alt="Oreo" className="max-w-[165px] lg:max-w-none lg:w-[180px] xl:w-[200px] md:mt-6 mt-3 md:ml-6 mb-4" />
      <div className="md:mt-10 md:mr-10">
        <div onClick={() => props.setShowShare(true)} className={`cursor-pointer hidden md:flex flex-row justify-center items-center gap-2 md:gap-3 text-[12px] md:text-base duration-300 text-white`}>
          <span>
            <img className="w-4" src="icon-share.svg" />
          </span>
          compartir
        </div>
      </div>
    </div>
  )
}
