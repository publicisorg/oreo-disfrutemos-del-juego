
export const Header = () => {
  return (
    <div className="md:flex md:justify-between md:w-full md:absolute md:top-0">
      <img src="./oreo.png" alt="Oreo" className="max-w-[165px] lg:max-w-none lg:w-[200px] xl:w-[250px] md:mt-6 mt-3 md:ml-6 mb-4" />
      <div className="md:mt-10 md:mr-10">
        <a href="#" className={`hidden md:flex flex-row justify-center items-center gap-2 md:gap-3 text-[12px] md:text-base duration-300 text-white`}>
          <span>
            <img className="w-4" src="icon-share.svg" />
          </span>
          compartir
        </a>
      </div>
    </div>
  )
}
