import React from 'react'

const About = () => {
    return (
        <section className="section about-me" data-section="section1">
            <div className="container">
                <div className="section-heading">
                    <h2>About Me</h2>
                    <div className="line-dec" />
                    <span>This is a Bootstrap v4.2.1 CSS Template for you. Edit and use
        this layout for your site. Updated on 21 May 2019 for repeated main menu HTML code.</span>
                </div>
                <div className="left-image-post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-image">
                                <img src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/126061802_3376249299096441_7900689741207181068_n.jpg?_nc_cat=102&ccb=3&_nc_sid=730e14&_nc_eui2=AeFOTejU5-bYwka7Sk59zD67mjUpSfggX7KaNSlJ-CBfsrjTbWazQcfTfIE-zlMPVcbjJL68hXalXu00Qn8FpGDm&_nc_ohc=NGvpqL0ea9IAX86Scj9&_nc_ht=scontent.fbkk2-8.fna&oh=df73a713525e7bfae33f64591330d5b1&oe=605D632D" alt />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-text">
                                <h4>Reflux HTML CSS Template</h4>
                                <p>
                                    Donec tristique feugiat lacus, at sollicitudin nunc euismod
                                    sed. Mauris viverra, erat non sagittis gravida, elit dui
                                    mollis ante, sit amet eleifend purus ligula eget eros. Sed
                                    tincidunt quam vitae neque pharetra dignissim eget ut
                                    libero.
            </p>
                                <div className="white-button">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-image-post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-text">
                                <h4>Sed sagittis rhoncus velit</h4>
                                <p>
                                    Pellentesque habitant morbi tristique senectus et netus et
                                    malesuada fames ac turpis egestas. Vestibulum fermentum
                                    eleifend nibh, vitae sodales elit finibus pretium.
                                    Suspendisse potenti. Ut sollicitudin risus a sollicitudin
                                    semper.
            </p>
                                <div className="white-button">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="/images/right-image.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
