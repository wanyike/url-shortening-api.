import showcase from "../images/illustration-working.svg"

export default function Showcase() {
  return (
    <>
          <section className="py-4 lg:py-18">
              <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-1 md:place-items-center">
                  <article className="text-center md:text-left">
                      <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-normal">More than just shorter links</h1>
                      <p className="lg:text-lg mb-8 text-slate-700">Build your brand’s recognition and get detailed insights 
                          on how your links are performing.</p>
                      <button className="start">Get Started</button>
                  </article>

                  <article className="md:mr-2">
                      <img className="showcase  md:ml-40" src={showcase} alt="" />

                      {/* <source media="(min-width: 768px)" srcSet={showcase} />
          <img className="relative" src={showcase} alt="" /> */}
                 </article>

              </div>
      </section>
    </>
  )
}
