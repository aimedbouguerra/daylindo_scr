import React from 'react';
import FormContent1 from './FormContent1';
import FormContent2 from './FormContent2';


export default function MyFormContent(props) {
  const isLastPage = props.isLastPage;
  var skillsSelected = props.skillsSelected;
  var SkillsData = props.SkillsData;

  var content = '';
  
  if (!isLastPage) {
      content = <FormContent1 />;
    } else {
      content = <FormContent2 SkillsData={SkillsData} skillsSelected={skillsSelected} />;
    }
    return (
      <div>
        {content}
      </div>
    )

}


/*  onChange={(ev)=>{this.props.onchange(ev.target.value)}} */