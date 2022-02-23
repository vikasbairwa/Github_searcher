import React from 'react'
import {FaSlackHash} from 'react-icons/fa'
function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
        <div>
        <FaSlackHash size={40}/>
        <p>Created by Vikas {year}</p>
        </div>
    </footer>
  )
}

export default Footer