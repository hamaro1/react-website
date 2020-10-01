import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
          <div className='footer-link-wrapper'>
              <div className='footer-link-items'>
                  <h2>About Me</h2>
              </div>
              <div className='footer-link-items'>
                  <h2>Videos</h2>
              </div>
              <div className='footer-link-items'>
                  <h2>Resources</h2>
              </div>
          </div>
          <small className='website-right'>Relax&Chill @ 2020</small>
        </div>
    )
}

export default Footer