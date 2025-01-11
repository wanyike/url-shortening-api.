import {useState} from "react"
import logo from "../images/logo.svg"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="header max-width py-6">
        <div className="flex items-center justify-between">
          <article className="flex items-center ">
          <img src={logo} alt="" />

<nav className="hidden md:block md:ml-4">
  <ul className="md:flex items-start justify-start ml-5">
    <li className="my-4 md:my-0 md:mr-5"><button className="btn-nav text-slate-400 font-bold">Features</button></li>
    <li className="my-4 md:my-0 md:mr-5"><button className="btn-nav text-slate-400 font-bold">Pricing</button></li>
    <li><button className="btn-nav text-slate-400 font-bold">Resources</button></li>
      </ul>
            </nav>
          </article>
          
          <ul className="hidden md:flex items-start justify-start ml-5">
          <li className="my-4 md:my-0 md:mr-5 text-slate-400"><button className="btn-nav font-bold">Login</button></li>
          <li><button className="start">Sign Up</button></li>
        </ul>

          {isOpen && (
            <div className="absolute left-5 right-5 rounded bg-slate-900 text-slate-200 top-16 text-center py-9 md:relative md:top-0 md:left-0  md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center ">
              <nav className="md:hidden">
                <ul className="md:flex items-start justify-start ml-5">
                  <li><button>Features</button></li>
                  <li className="my-4 md:my-0 md:mr-5"><button>Pricing</button></li>
                  <li><button>Resources</button></li>
                </ul>
                
                <ul className="">
                  <li className="my-4 md:my-0 md:mr-5"><button>Login</button></li>
                  <li><button className="start">Sign Up</button></li>
                </ul>
              </nav>
            </div>)}
          

          <button onClick={() => setIsOpen(!isOpen)} className="uppercase text-sm tracking-wide md:hidden">
           {isOpen ? "Close" : "Menu"}
          </button>
          </div>
      </header>
    </> 
  )
}

