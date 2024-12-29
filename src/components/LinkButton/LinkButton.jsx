import React from 'react';

const linksArr = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"]

function LinkButton({link}) {
  return (
    <li>
      <button>{link}</button>
      
    </li>
  );
}

export default LinkButton;
