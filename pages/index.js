import React from 'react'
import AsyncComponent from '../util/asyncComponent'
const Home = AsyncComponent(() => import('../routers/home'));

const index = () => {
  return (
    <div>
    </div>
  )
}

export default Home;
