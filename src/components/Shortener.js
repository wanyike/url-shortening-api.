import { useState} from "react";

import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";

// https://api.shrtco.de/v2/shorten?url=


export default function Shortener() {
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Input is required")
    }
  }

  return (
    <>
      <section className="max-width shortener relative">
        <div className="">
        <picture className="">
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img className="" src={bgMobile} alt="" />
          </picture>
          
   <div className="shortener-inner">
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-4">
                <input className="w-full py-3 px-5 mb-2 md:mb-0 rounded-lg" type="url" placeholder="Shorten a link here"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button className="shorten-btn py-3 rounded-lg  md:w-40 md:ml-5"
                  onClick={handleSubmit}
                  type="submit">
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
