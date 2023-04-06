import React, { useState } from 'react'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'
function Navbar() {
  const [initval, setInitval] = useState(
    {
      name: "",
      compnayName: "",
      lastName: "",
      jd: "",
      isreadytoswitch: false,
    }
  )
  const [showmediaIcons, setShowmediaIcons] = useState(false);
  return (
    <>
      <nav className='main-nav'>
        {/* this part is for logo */}
        <div className='logo'>
          <h2>
            {/* <span>S</span>idharth  
        <span>T</span>ech */}
            Sidharth Tech
          </h2>

        </div>
        {/* this part show menus */}
        <div className={showmediaIcons ? 'mobile-menu-link' : "menu-link"}>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>


        {/* social media links div tag 3rd part */}
        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <a href="https://www.linkedin.com/in/sidharth-vhanmarathe/" target="_blank"><FaLinkedin className='linkedin' /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/siddharath.vhanamarthe/" target="_blank"><FaFacebook className='facebook' /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/@siddharthvhanmarathe7563/about" target="_blank"><FaYoutube className='youtube' /></a>
            </li>
          </ul>
          {/* humurger menu link for responsive case */}
          <div className='hamburger-menu'>

            <a href="#"><GiHamburgerMenu onClick={() => setShowmediaIcons(!showmediaIcons)} /></a>
          </div>
        </div>

      </nav>

      {/* section */}
      <section className='hero-section'>
        <p>Welcome to</p>
        <h1>Sidharth Tech</h1>
      </section>

    </>
  )
}

export default Navbar