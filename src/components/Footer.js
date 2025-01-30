import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import logo from "../images/footer-logo.svg"

export default function Footer() {
  return (
    <div className="">
          <footer className="bg-slate-900 py-9 lg:py-20">
              <div className="footer max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
           <article className="md:mb-32">
            <img className="" src={logo} alt="" />
          </article>
          
          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">Features</h3>
            <ul className="md:mb-12">
              <li><button className="btn-footer text-slate-200 text-sm mt-2">Link Shortening</button></li>
              <li><button className="btn-footer text-slate-200 text-sm mt-2">Branded Links</button></li>
              <li><button className="btn-footer text-slate-200 text-sm mt-2">Analytics</button></li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">Resources</h3>
            <ul className="md:mb-12">
              <li><button className="btn-footer text-slate-200 text-sm mt-2"> Blog</button></li>
              <li><button className="btn-footer text-slate-200 text-sm mt-2">Developers</button></li>
              <li><button className="btn-footer text-slate-200 text-sm mt-2">Support</button></li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">Company</h3>
            <ul className="">
              <li><button className="btn-footer text-slate-200 text-sm mt-2">About</button></li>
              <li><button className="btn-footer text-slate-200 text-sm mt-2">Our Team</button></li>
              <li><button className="btn-footer text-slate-200 text-sm mt-2">Careers</button></li>
              <li><button className="btn-footer text-slate-200 text-sm mt-2">Contact</button></li>
            </ul>
          </article>

          <article>
            <ul className="flex items-center md:mb-24">
              <li> <button><img className="btn-footer" src={facebook} alt="" /></button></li>
              <li><button><img className="btn-footer ml-5" src={twitter} alt="" /></button></li>
              <li><button><img className="btn-footer ml-5" src={pinterest} alt="" /></button></li>
              <li><button><img className="btn-footer mx-5" src={instagram} alt="" /></button></li>
            </ul>
          </article>

              </div>
         </footer>
          
    </div>
  )
}
