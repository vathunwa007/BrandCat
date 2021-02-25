import React from 'react'
import AsyncComponent from '../util/asyncComponent'
const Home = AsyncComponent(() => import('../Routers/Home'));

const index = () => {
  return (
    <div>
    </div>
  )
}

export default Home;
