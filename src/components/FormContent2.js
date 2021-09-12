import React,{ useState } from 'react';
import MySkillItem from './MySkillItem';
import { nanoid } from "nanoid";
import dragIMG from '../static/img/drag_img.png';
import infoIMG from '../static/img/info_img.png';


export default function FormContent2(props) {

  const [skills, setSkills] = useState(props.skillsSelected);
  const [skillsToSelect, setSkillsToSelect] = useState(props.SkillsData);

//peut-être amélioré avec un seul tableau de data et un attribut selected + filter sur cet attribut

  function addSkill(name,id) {
    const newSkill = { id: nanoid(), name: name};
    setSkills([...skills, newSkill]);

    const remainingSkillsToSelect = skillsToSelect.filter(skill => id !== skill.id);
    setSkillsToSelect(remainingSkillsToSelect);
  }

  function removeSkill(name,id) {
    const newSkill = { id: nanoid(), name: name};
    setSkillsToSelect([...skillsToSelect, newSkill]);

    const remainingSkillsSelected = skills.filter(skill => id !== skill.id);
    setSkills(remainingSkillsSelected);
  }

const skillList = skillsToSelect
    .map(myskill => (
      <MySkillItem 
        key={myskill.id} 
        id={myskill.id}
        name={myskill.name} 
        onClickSkill={addSkill}
        />
    ));

const skillListSelected = skills
    .map(myskill => (
      <MySkillItem 
        key={myskill.id} 
        id={myskill.id} 
        name={myskill.name} 
        onClickSkill={removeSkill}
      />
    ));

    return (
      
        <div>
          <div className="selectedSkills">
            <div key="listSkills" className="listSkills">
              <ul key="skillListSelected">
                {skillListSelected}
              </ul>
            </div>
            <div className="dragdropZone">
              <p>
                <img src={dragIMG} alt="dragIMG" width="50px" /><br />
                Drag and drop selected item here
              </p>
            </div>
          </div>
          <div className="selectionSkills">
            <h2>
              Skills 
              <div className="Mytooltip">
                <div className="tooltip">
                  <img src={infoIMG} alt="dragIMG" />
                  <span className="tooltiptext">This list contains all 6-levels micro.</span>
                </div>
              </div>
            </h2>
            <input type="text" placeholder="Search" className="search" />
            <div key="listToSelectSkills" className="listToSelectSkills">
              <ul key="skillList">
                {skillList}
              </ul>
            </div>
          </div>
        </div>
    )
}


/*  onChange={(ev)=>{this.props.onchange(ev.target.value)}} */