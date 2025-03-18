import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const layout = ({children}) => {
  return (
    <>
        <Navbar />
            <div className="Content">
                {children}
            </div>
        <Footer />
    </>
  )
}

export default layout
