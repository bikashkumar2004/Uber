import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      <Link to='/user/logout'>logout</Link>
    </div>
  )
}

export default Home
