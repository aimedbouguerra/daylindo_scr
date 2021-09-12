import React from 'react';


export default function FormContent1() {
  
  /*console.log(myButton);*/
function handleChange(e){  
   
 
 }

    return (
      <form>
        <fieldset>
          <label htmlFor='macroskillInput'>Macro-skill name</label>
          <input type='text' name='macroskill' label='Macro-skill name' required={true} onChange={handleChange} />
        </fieldset>
      </form>
    )
}


/*  onChange={(ev)=>{this.props.onchange(ev.target.value)}} */
/* if(e.target.value!==''){
    myButton.disabled= 'false';
    myButton.classList.add("active");
    myButton.classList.remove("inactive");
  }else{
    myButton.disabled = 'true';
    myButton.classList.remove("active"); 
    myButton.classList.add("inactive");
  }*/