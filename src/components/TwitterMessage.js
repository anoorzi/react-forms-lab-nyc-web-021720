import React from "react";

class TwitterMessage extends React.Component {

    state = {
      inputVal: "",
      remainChar: this.props.maxChars
    };


    handleChange = (event) => {
      this.setState({
        inputVal: event.target.value
      },
      this.handleRemaining()
      )
    }

    handleRemaining = () =>{

    }
  

  render() {
    let charNumber = this.props.maxChars - this.state.inputVal.length;

    return (
      
      <div>
        <strong>message</strong>
        <input type="text" name="message" id="message" value ={this.state.inputVal} onChange={this.handleChange}/>
        {charNumber}

      </div>
    );
  }
}

export default TwitterMessage;
