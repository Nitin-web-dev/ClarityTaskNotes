import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full  bg-slate-950 fixed bottom-0 text-lg p-1 text-center text-white'>
      <h2><span>&copy;</span> {new Date().getFullYear()} Nitin. All rights reserved.</h2>
    </div>
  )
}

export default Footer
