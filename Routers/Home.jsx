import Head from 'next/head'
import Navbar from '../components/Navbar'

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
          <section>
            <div style={{ height: "900px" }} id="bgsection1"></div>
            <div className="bgtext">
              <h1 styles={{ position: "absolute" }}>ออกแบบเพื่อน้องแมวสุดที่รัก</h1>
            </div>

          </section>
        </div>
      </div>
    </div>
  )
}
