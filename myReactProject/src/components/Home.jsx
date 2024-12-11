import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header />
      <nav>
        <ul>
            <li>
                <Link to="/login"> Login </Link>
            </li>
            <li>
                <Link to="/register"> Register </Link>
            </li>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}

export default Home
