
export const Footer = (props:any) => {
  return (
    <footer className='text-center text-white flex flex-col py-2 w-[90%] gap-2 mb-4'>
      <a href="#" className={`flex flex-row justify-center items-center gap-2 text-[12px] duration-300 ${props.opacity}`}>
        <span>
          <img className="w-4" src="icon-share.svg" />
        </span>
        compartir
      </a>
      <small className="text-[10px]">Copyright © Mondelez International 2023. All Rights reserved.</small>
    </footer>
  )
}

export const FooterStart = (props:any) => {

  return (
    <footer className='text-center text-white flex flex-col py-2 w-[90%] gap-2 mb-4'>
      <div className={`flex flex-row justify-center items-center gap-3 duration-300 ${props.opacity}`}>
        <a href="https://www.instagram.com/oreoargentina/" target="_blank" className="flex flex-row justify-center items-center gap-1">
          <img className="h-4 aspect-square fill-white" src="icon-IG.svg" />
          <p className="text-xs">
            oreoargentina
          </p>
        </a>
        <a href="https://www.instagram.com/recetoreo/" target="_blank" className="flex flex-row justify-center items-center gap-1">
          <img className="h-4 aspect-square fill-white" src="icon-IG.svg" />
          <p className="text-xs">
            recetoreo
          </p>
        </a>
        <a href="https://www.facebook.com/oreoargentina" target="_blank" className="flex flex-row justify-center items-center gap-1">
          <img className="h-4 aspect-square fill-white" src="icon-FB.svg" />
          <p className="text-xs">
            oreoargentina
          </p>
        </a>
      </div>
      <small className="text-[10px]">Copyright © Mondelez International 2023. All Rights reserved.</small>
    </footer>
  )
}