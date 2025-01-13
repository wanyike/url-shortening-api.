import {useState} from "react";
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";

export default function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!text) {
      alert("Please enter a valid URL.");
      return;
    }
  
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${text}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Shortened URL:", data.result.full_short_link);
  
      setLinks((prevLinks) => [
        ...prevLinks,
        { original: text, short: data.result.full_short_link },
      ]);
  
      setText(""); // Clear the input field
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to shorten the link. Please try again.");
    }
  };
  

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

          <div className="flex items-center md:flex-row md:justify-between flex-col bg-white justify-center">
            <article>
              <h6 className="mb-7 md:mb-0">{links.original_link}</h6>
            </article>
            <article>
              <ul className="">
                <li className="">
                  <button className="text-cyan-500">{links.full_short_link}</button>
                </li>

                <li className="">
                <button className="shorten-btn text-sm">copy</button>
                  </li>
              </ul>
            </article>
          </div>

          </div>
      </section>
    </>
  );
}
