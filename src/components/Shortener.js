import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";

export default function Shortener() {
  return (
    <>
      <section className="max-width shortener relative">
        <div className="">
        <picture className="">
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img className="" src={bgMobile} alt="" />
          </picture>
          
   <div className="shortener-inner">
        <form className="form">
          <div className="flex flex-col md:flex-row mb-4">
            <input className="w-full py-3 px-5 mb-2 md:mb-0 rounded-lg" type="url" placeholder="Shorten a link here" />
            <button className="shorten-btn py-3 rounded-lg  md:w-40 md:ml-5" type="submit">
              Shorten it!
            </button>
          </div>
          </form>
          </div>

          </div>
      </section>
    </>
  );
}
