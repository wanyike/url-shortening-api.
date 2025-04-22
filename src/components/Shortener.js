import React, { useEffect, useState } from "react";
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";

const getLocalStorage = () => {
  let links = localStorage.getItem("links")
  if (links) {
  return JSON.parse(localStorage.getItem("links"))
}
  else {
    return[]
 }
}

export default function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage())
  const [buttonText, setButtonText] = useState("Copy")

  const handleSubmit = (e) => {
    e.preventDefault();
        
   if (!text) {
      alert("Please enter a valid URL.");
    }
    else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data = await res.json()
        console.log(data.result)
        setLinks(data.result)
        setText("")
      }
      shortenLink()
    }
    }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link)
    setButtonText("Copied!")
 }

  // copy copied
  
  useEffect(() => {
  localStorage.setItem("links", JSON.stringify(links))
}, [links])
  
  return <div>{
     <>
      <section className="max-width shortener relative">
        <div className="">
        <picture className="">
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img className="" src={bgMobile} alt="" />
          </picture>
          
   <div className="shortener-inner">
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-4 mt-4">
                <input className="w-full py-1 px-5 mb-2 md:mb-0 rounded-lg" type="url" placeholder="Shorten a link here"
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

          <div className="flex items-center md:flex-row md:justify-between flex-col bg-white justify-center p-3 mt-2">
            <article>
              <h6 className="mb-3 md:mb-0">{links.original_link}</h6>
            </article>

            <article>
              <ul className="md:flex flex items-center">
                <li className="md:mr-5 mr-5">
                  <button className="text-cyan-500">{links.full_short_link}</button>
                </li>

                <li className="">
                <button onClick={handleCopy} className="shorten-btn text-sm focus:bg-slate-800">{buttonText}</button>
                  </li>
              </ul>
            </article>
          </div>

          </div>
      </section>
    </>
    
  }</div>;
}
