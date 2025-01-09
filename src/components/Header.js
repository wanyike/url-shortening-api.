import React from 'react'
import logo from "../images/logo.svg"
export default function Header() {
  return (
    <>
      <header className="header max-width">
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
        
        <ul className="">
          <li><button>Login</button></li>
          <li><button className="btn">Sign Up</button></li>
        </ul>
      </header>
    </> 
  )
}

