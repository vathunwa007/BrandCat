import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Fade from 'react-reveal/Fade';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function Home() {
  return (
    <div>
      <Head>
        <title>ออกแบบให้น้องแมวสุดรัก</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-5 mb-5">
        <div className="card">
        <Navbar />
          <section className="section" style={{ position: "relative" }} id="section1">
            <div style={{ height: "80vh" }} id="bgsection1"></div>
            <Fade bottom big>
              <div className="bgtext">
                <h1>ออกแบบเพื่อน้องแมวสุดที่รัก</h1>
              </div>
            </Fade>
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_z9ed2jna.json"
              style={{bottom:-80,height: '300px', width: '300px',position:"absolute" }}
            >
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
          </section>

        </div>
      </div>
    </div>
  )
}
