
export const Header = () => {
  return (
    <div className="md:flex md:justify-between md:mt-4 px-10 md:w-full md:absolute md:top-0">
      <img src="./oreo.png" alt="Oreo" className="max-w-[166px] mt-2" />
      <a href="#" className={`hidden md:flex flex-row justify-start items-start gap-2 text-[12px] duration-300 text-white`}>
        <span>
          <img className="w-3" src="icon-share.svg" />
        </span>
        compartir
      </a>
    </div>
  )
}
