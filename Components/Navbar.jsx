import React, { useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {

  useEffect(() => {

  })
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ zIndex: 1, marginTop: -90 }}><img src="/images/logo.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link href="/">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#section1">หน้าแรก</a>
              </li>
            </Link>
            <Link href="profile">
              <li className="nav-item">
                <a className="nav-link" href="#section2">สร้างโปรไฟล์</a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#section3">สร้างQrCode</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section4">เช็คข้อมูลการติดตาม</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
