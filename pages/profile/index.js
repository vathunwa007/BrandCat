import React from 'react'
import AsyncComponent from '../../util/asyncComponent'
const Profile = AsyncComponent(() => import('../../Routers/Profile'));

const index = () => {
  return (
    <div>
    </div>
  )
}

export default Profile;
