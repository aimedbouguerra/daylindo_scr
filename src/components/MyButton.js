import React from 'react';

export default class MyButton extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.inputRef = React.createRef();

  }

  render() {
    
    return (
      <div className="NavButton">
        <a
            name={this.props.name}
            ref={this.inputRef}
            text={this.props.text}
            className={this.props.className}
            disabled={this.props.disabled}
            onClick={this.props.onClick}
        >
          Next
        </a>        
      </div>
    );
    
  }

  componentDidMount() {
    //let MyButtonNext = this.inputRef.current;
    //console.log("Parent", MyButtonNext);
  }
}
