import React from 'react';
import LinkButton from '../LinkButton/LinkButton';

const linksArr = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

function Links() {
  return (
    <div>
  {
    linksArr.map ((link) => (
     
      <LinkButton key={link} link={link}/>
      
    
    ))
  }
    </div>
  );
  
}

export default Links;
