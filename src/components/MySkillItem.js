import React from 'react';
import skillIMG from '../static/img/skill_img2.png';


export default function MySkillItem(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
    props.onClickSkill(props.name,props.id);
  }

    return (
      <li id={props.id}>
        <button onClick={handleClick}>
          <p><img src={skillIMG} alt="SkillImg" />
          <span>{props.name}</span></p>
        </button>
      </li>  
    )
}

