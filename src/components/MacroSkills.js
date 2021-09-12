import React from 'react';
import MyNavBar from './MyNavBar';
import MyFormContent from './MyFormContent';
import MyButton from './MyButton';

function NextButton(e) {
  return (
    <MyButton
          name='next'
          text='Next'
          className='button next active'
          disabled={true}
          onClick={e.onClick}
      >
      Next
    </MyButton>    
  );
}

function PreviousButton(e) {
  return (
    <div className="NavButton">
    <a
          name='previous'
          text='Previous'
          className='button previous inactive'
          disabled={true}
          onClick={e.onClick}
      >
      Previous
    </a></div>
  );
}

export default class MacroSkills extends React.Component {
  constructor(props) {
    super(props);

    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.state = {isLastPage: false};
  }


  handleNextClick() {
    this.setState({isLastPage: true});
  }

  handlePreviousClick() {
    this.setState({isLastPage: false});
  }

  render() {
    const isLastPage = this.state.isLastPage;
    const skillsSelected = this.props.skillsSelected;
    const SkillsData = this.props.SkillsData;
    let button;

    if (isLastPage) {
      button = <PreviousButton onClick={this.handlePreviousClick} />;
    } else {
      button = <NextButton onClick={this.handleNextClick} />;
    }

    return (
      <div>
        <div className="MyNavBar"><MyNavBar isLastPage={isLastPage} /></div>
        <div className="MyFormContent"><MyFormContent isLastPage={isLastPage} SkillsData={SkillsData} skillsSelected={skillsSelected} /></div>
        {button}
      </div>
    );
  }
}