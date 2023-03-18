import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiYoutube} from 'react-icons/fi'

function Footer() {
  return (
    <>
      <footer className="footer text-center bg-dark" id="contact">
        <h1 className="text-white">CONTACT</h1>
          <div className="jumbotron text-center bg-dark">
            <NavLink to="https://www.instagram.com/" style={{marginLeft:'43%'}}>
              <BsInstagram className='icon text-warning'/>
            </NavLink>
            <NavLink to="https://www.youtube.com/" style={{marginLeft:'10px'}}>
              <FiYoutube className="icon-yt text-warning m-5"/>
            </NavLink>
            <NavLink to="https://in.linkedin.com/" style={{marginLeft:'10px'}}>
              <AiFillLinkedin className="icon text-warning"/>
            </NavLink>
          </div>
        <h6 className="w-100 bg-dark text-center">
          <p className="text-white">
            Copyright Ⓒ 2023, Designed by News Hub. All Rights Reserved |
            Terms and Conditions
          </p>
        </h6>
      </footer>
    </>
    // <div className="conatiner d-flex justify-content-center align-items-center">Developed by Khushi Passi</div>
  )
}

export default Footer