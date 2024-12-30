import React from 'react';

function Profile() {

  return (
    <div className='profile'>
      <img
        className='profilePicture'
        src='assets\images\avatar-jessica.jpeg'
        alt='Photo of Jessical'
      />
        <h1>Jessica Randall </h1> 
        <h2>London, United Kingdom</h2>
        <p> "Front-end developer and avid reader.</p>
    </div>
  );
}

export default Profile;
