function BannerCoffee({
  src = "/CUP-COFFEE.png",
  alt = "Taza de café",
  position = "bottom-10 right-46",
  className = ""
}) {
  return (
    <div className={`bg-white absolute z-30 rounded-full shadow-2xl border border-black shadow-gray-900 flex items-center justify-center transition-transform duration-500 hover:scale-110
                      ${position} w-24 h-24 sm:w-28 sm:h-28
                      md:w-36 md:h-36
                      lg:w-44 lg:h-44
                      xl:w-52 xl:h-52
                      ${className}`}> 
        <img
        src={src}
        alt={alt}
        className="w-20 sm:w-20 md:w-28 lg:w-36 xl:w-50 object-contain transition-transform duration-500 hover:rotate-20"
      /> </div>
  )
}

export { BannerCoffee };
