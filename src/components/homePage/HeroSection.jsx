import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export function HeroSection() {
  return (
    <div className="bg-[url('/public/bg-hero.jpg')] bg-cover bg-center font-roboto">
      <div className="bg-bg-black px-10 py-12 sm:px-24 lg:py-24 lg:px-32">
        <h1 className="font-boska text-white text-[32px] mb-2 text-center font-bold lg:text-[40px] lg:text-left">
          Find your next stay
        </h1>
        <form className="lg:bg-white lg:flex lg:items-center lg:gap-3 lg:p-10 lg:rounded-[10px] lg:w-3/5">
          <div className="relative bg-white rounded-[10px] py-3 mb-2 md:w-1/2 md:mx-auto lg:border lg:border-outline lg:mb-0 lg:w-3/5">
            <PlaceOutlinedIcon className="absolute left-4 text-black !w-5" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full pl-10 placeholder:text-black placeholder:text-sm relative z-10 focus-visible:outline-0"
            />
          </div>
          <button
            type="submit"
            className="bg-blue text-white cursor-pointer rounded-[10px] py-3 w-full font-medium block md:w-1/2 md:mx-auto lg:w-2/5 transition-all duration-300 hover:bg-white hover:text-blue hover:border"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
