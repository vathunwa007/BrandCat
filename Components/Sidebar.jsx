import React from 'react'

const Sidebar = () => {
    return (
        <div className="responsive-nav">
            <i className="fa fa-bars" id="menu-toggle" />
            <div id="menu" className="menu">
                <i className="fa fa-times" id="menu-close" />
                <div className="container">
                    <div className="image">
                        <a href="#"><img src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/126061802_3376249299096441_7900689741207181068_n.jpg?_nc_cat=102&ccb=3&_nc_sid=730e14&_nc_eui2=AeFOTejU5-bYwka7Sk59zD67mjUpSfggX7KaNSlJ-CBfsrjTbWazQcfTfIE-zlMPVcbjJL68hXalXu00Qn8FpGDm&_nc_ohc=NGvpqL0ea9IAX86Scj9&_nc_ht=scontent.fbkk2-8.fna&oh=df73a713525e7bfae33f64591330d5b1&oe=605D632D" alt /></a>
                    </div>
                    <div className="author-content">
                        <h4>Cat collar</h4>
                        <span>ออกแบบดีไซน์ให้น้องแมวสุดที่รัก</span>
                    </div>
                    <nav className="main-nav" role="navigation">
                        <ul className="main-menu">
                            <li><a href="#section1">เกี่ยวกับเรา</a></li>
                            <li><a href="#section2">สร้างและออกแบบปลอกคอ</a></li>
                            <li><a href="#section3">ติดตามพิกัด</a></li>
                            <li><a href="#section4">ออกแบบคิวอาร์โค๊ด</a></li>
                        </ul>
                    </nav>
                    <div className="social-network">
                        <ul className="soial-icons">
                            <li>
                                <a href="https://fb.com/templatemo"><i className="fa fa-facebook" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-twitter" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-linkedin" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-dribbble" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-rss" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright-text">
                        <p>Copyright 2019 Reflux Design</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
