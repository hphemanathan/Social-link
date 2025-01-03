import React from 'react';

const linksArr = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"]

function LinkButton({link}) {
  return (
    <li>
      <a>{link}</a>
      
    </li>
  );
}

export default LinkButton;
