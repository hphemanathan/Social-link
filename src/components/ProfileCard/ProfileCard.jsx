import React from 'react';
import Profile from '../Profile'
import Link from '../Links'

function ProfileCard() {
  return (
    <div className='profileCard'>
      <div className='wrapper'>
        <Profile />
        <Link/>
      </div>
    </div>
  );
}

export default ProfileCard;
