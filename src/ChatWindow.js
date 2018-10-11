import React, { Component } from 'react'
import ChatMessages from './ChatMessages';
import AddMessage from './AddMessage';

class ChatWindow extends Component {
  onhandleAddMessage = message => {
      this.props.onhandleAddMessage1(message);
	};

  render() {
    return (
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>

            <ul className="message-list">
            	<ChatMessages messages={this.props.messages} user={this.props.user} />
            </ul>

            <div>
              <AddMessage user={this.props.user} onAddMessage={this.onhandleAddMessage}/>
            </div>
          </div>
    )
  }
}

export default ChatWindow