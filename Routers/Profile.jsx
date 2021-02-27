import React from 'react'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
const Profile = () => {
    return (
        <div>
            <Head>
                <title>ออกแบบให้น้องแมวสุดรัก</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mt-5 mb-5">
                <div className="card">
                    <Navbar />
                    <div style={{ height: "80vh" }} id="bgsection2"></div>
                    <section className="section" style={{ position: "absolute",width:"100%",top:"15%",padding:"2%"}} id="section1">
                        <div className="row">
                            <div className="col-4 card cardnew">
                                asdas
                            </div>
                            <div className="col-8 card cardnew">
                                asdsa
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <style global jsx>{`
            html,body {
                transition: background-color 2s ease;
                background: #a6f7b4;
            }
            .cardnew {
                background: #00000078;
                border-radius: 0px;


        }
      `}</style>
        </div>
    )
}

export default Profile
