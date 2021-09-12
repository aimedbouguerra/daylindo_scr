import React from 'react';


export default function MyNavBar(props) {
const isLastPage = props.isLastPage;

var defaultClass1="";
var defaultClass2 = "";
if(!isLastPage){
  defaultClass1= "active";
  defaultClass2="inactive";
}else{
  defaultClass1= "inactive";
  defaultClass2="active";
}

  const DATANAV = [
  { id:'1', name: "Macro-skill detail", defaultClass: defaultClass1},
  { id:'2', name: "Skills selection", defaultClass: defaultClass2}
];

const navList = DATANAV
    .map(mynav => (
      <div
        id={'step-'+mynav.id}
        key={'step-'+mynav.id}
        name={mynav.name}
        className={mynav.defaultClass}
      >
        <span className='subtitle'>STEP {mynav.id}</span><br />
        <span>{mynav.name}</span>
      </div>
    ));



  return(
    <div className="step">{navList}</div>
  );
}