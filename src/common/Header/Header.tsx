
export const Header = () => {
  return (
    <div className="md:flex md:justify-between md:w-full md:my-11 md:px-12">
      <img src="./oreo.png" alt="Oreo" className="max-w-[166px] mt-2" />
      <a href="#" className={`hidden md:flex  flex-row justify-center items-center gap-2 text-[12px] duration-300 text-white`}>
        <span>
          <img className="w-4" src="icon-share.svg" />
        </span>
        compartir
      </a>
    </div>
  )
}
