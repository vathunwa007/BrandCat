import Head from 'next/head'
import Sidebar from '../Components/Sidebar'
import styles from '../styles/Home.module.css'
import About from './section/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ออกแบบให้น้องแมวสุดรัก</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="page-wraper">
        {/* Sidebar Menu */}
        <Sidebar/>
        {/* section ALl */}
        <About/>

        <section className="section my-services" data-section="section2">
          <div className="container">
            <div className="section-heading">
              <h2>What I’m good at?</h2>
              <div className="line-dec" />
              <span>Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
              Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
          Nullam eu faucibus diam. Donec eget massa ante.</span>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="service-item">
                  <div className="first-service-icon service-icon" />
                  <h4>HTML5 &amp; CSS3</h4>
                  <p>
                    Phasellus non convallis dolor. Integer tempor hendrerit arcu
                    at bibendum. Sed ac ante non metus vehicula congue quis eget
                    eros.
            </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item">
                  <div className="second-service-icon service-icon" />
                  <h4>Creative Ideas</h4>
                  <p>
                    Proin lacus massa, eleifend sed fermentum in, dignissim vel
                    metus. Nunc accumsan leo nec felis porttitor, ultricies
                    faucibus purus mollis.
            </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item">
                  <div className="third-service-icon service-icon" />
                  <h4>Easy Customize</h4>
                  <p>
                    Integer suscipit condimentum aliquet. Nam quis risus metus.
                    Nullam faucibus quam eget arcu pretium tincidunt. Nam libero
                    dui.
            </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-item">
                  <div className="fourth-service-icon service-icon" />
                  <h4>Admin Dashboard</h4>
                  <p>
                    Vivamus et dui a massa venenatis fringilla. Proin lacus massa,
                    eleifend sed fermentum in, dignissim vel metus. Nunc accumsan
                    leo nec felis porttitor.
            </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section my-work" data-section="section3">
          <div className="container">
            <div className="section-heading">
              <h2>My Work</h2>
              <div className="line-dec" />
              <span>Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
              amet. Duis ac elit vulputate, lobortis arcu quis, vehicula
          mauris.</span>
            </div>
            <div className="row">
              <div className="isotope-wrapper">
                <form className="isotope-toolbar">
                  <label><input type="radio" data-type="*" defaultChecked name="isotope-filter" />
                    <span>all</span></label>
                  <label><input type="radio" data-type="people" name="isotope-filter" />
                    <span>people</span></label>
                  <label><input type="radio" data-type="nature" name="isotope-filter" />
                    <span>nature</span></label>
                  <label><input type="radio" data-type="animals" name="isotope-filter" />
                    <span>animals</span></label>
                </form>
                <div className="isotope-box">
                  <div className="isotope-item" data-type="nature">
                    <figure className="snip1321">
                      <img src="/images/portfolio-01.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="/images/portfolio-01.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>First Title</h4>
                        <span>free to use our template</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="isotope-item" data-type="people">
                    <figure className="snip1321">
                      <img src="/images/portfolio-02.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="/images/portfolio-02.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Second Title</h4>
                        <span>please tell your friends</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="isotope-item" data-type="animals">
                    <figure className="snip1321">
                      <img src="/images/portfolio-03.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="/images/portfolio-03.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Item Third</h4>
                        <span>customize anything</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="isotope-item" data-type="people">
                    <figure className="snip1321">
                      <img src="/images/portfolio-04.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="/images/portfolio-04.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Item Fourth</h4>
                        <span>Re-distribution not allowed</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="isotope-item" data-type="nature">
                    <figure className="snip1321">
                      <img src="/images/portfolio-05.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="/images/portfolio-05.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Fifth Awesome</h4>
                        <span>Ut sollicitudin risus</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="isotope-item" data-type="animals">
                    <figure className="snip1321">
                      <img src="/images/portfolio-06.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="/images/portfolio-06.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Awesome Sixth</h4>
                        <span>Donec eget massa ante</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section contact-me" data-section="section4">
          <div className="container">
            <div className="section-heading">
              <h2>Contact Me</h2>
              <div className="line-dec" />
              <span>Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
              efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className="row">
              <div className="right-content">
                <div className="container">
                  <form id="contact" action method="post">
                    <div className="row">
                      <div className="col-md-6">
                        <fieldset>
                          <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
                        </fieldset>
                      </div>
                      <div className="col-md-6">
                        <fieldset>
                          <input name="email" type="text" className="form-control" id="email" placeholder="Your email..." required />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your message..." required defaultValue={""} />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="button">
                            Send Message
                    </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
