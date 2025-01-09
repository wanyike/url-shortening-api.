import React from 'react'
import logo from "../images/logo.svg"
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="">
          <img src={logo} alt="" />

          <nav className="">
            <ul className="">
              <li><button>Features</button></li>
              <li><button>Pricing</button></li>
              <li><button>Resources</button></li>
         </ul>

          </nav>
      </div>
      </header>
    </> 
  )
}

