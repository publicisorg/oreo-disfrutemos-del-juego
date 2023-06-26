
export const Footer = (props:any) => {
  return (
    <footer className='text-white flex flex-col py-2 w-full md:gap-2 gap-1 md:mb-4 mb-2 justify-center items-center md:items-start md:pl-8'>
      <a href="#" className={`md:hidden flex flex-row justify-center items-center gap-2 text-[12px] duration-300 ${props.opacity}`}>
        <span>
          <img className="w-4" src="icon-share.svg" />
        </span>
        compartir
      </a>
      <small className="text-[9px] md:text-xs xl:text-sm">Copyright © Mondelez International 2023. All Rights reserved.</small>
    </footer>
  )
}

export const FooterStart = (props:any) => {

  return (
    <footer className='text-white flex flex-col md:flex-row-reverse py-2 w-full md:gap-2 gap-3 md:mb-4 mb-2 justify-center md:justify-between items-center md:items-end md:px-8'>
      <div className={`flex flex-row justify-center items-center gap-3 duration-300 ${props.opacity}`}>
        <a href="https://www.instagram.com/oreoargentina/" target="_blank" className="flex flex-row justify-center items-center gap-1">
          <img className="h-5 aspect-square fill-white" src="icon-IG.svg" />
          <p className="text-[11px] mt-[3px] md:text-xs xl:text-sm">
            oreoargentina
          </p>
        </a>
        <a href="https://www.instagram.com/recetoreo/" target="_blank" className="flex flex-row justify-center items-center gap-1">
          <img className="h-5 aspect-square fill-white" src="icon-IG.svg" />
          <p className="text-[11px] mt-[3px] md:text-xs xl:text-sm">
            recetoreo
          </p>
        </a>
        <a href="https://www.facebook.com/oreoargentina" target="_blank" className="flex flex-row justify-center items-center gap-1">
          <img className="h-5 aspect-square fill-white" src="icon-FB.svg" />
          <p className="text-[11px] mt-[3px] md:text-xs xl:text-sm">
            oreoargentina
          </p>
        </a>
      </div>
      <small className="text-[9px] md:text-xs xl:text-sm">Copyright © Mondelez International 2023. All Rights reserved.</small>
    </footer>
  )
}