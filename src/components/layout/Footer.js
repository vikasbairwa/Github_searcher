import React from 'react'
function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className=" font-[serif] footer p-5 bg-gray-800 text-primary-content footer-center">
        <div>
        <p>Created by Vikas {year}</p>
        </div>
    </footer>
  )
}

export default Footer