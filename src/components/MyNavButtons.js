import React from 'react';
//import ReactDOM from 'react-dom';
import MacroSkills from './MacroSkills';


export default function MyNavButtons(props) {
    var skillsSelected = props.skillsSelected;
    var SkillsData = props.SkillsData;

    /*var myButtonNext = ReactDOM.findDOMNode(this).getElementsByClassName('button');
    console.log(myButtonNext);*/

    return (
        <div>
          <MacroSkills SkillsData={SkillsData} skillsSelected={skillsSelected} />
        </div>
      );

}

