import React, { Component } from 'react'

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      	text: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  addMessage = event => {
    event.preventDefault();
    
    var itemToBeAdded = {
      username : this.props.user.username,
      text : this.state.text,
    }; 
    
    this.props.onAddMessage(itemToBeAdded);
  };
  
  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

  isDisabled = () => {
    return false;
  };
  
render() {
  
  
    return (
      <form onSubmit={this.addMessage} className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." name="text" onChange={this.handleInputChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
    )
  }
}

export default AddMessage