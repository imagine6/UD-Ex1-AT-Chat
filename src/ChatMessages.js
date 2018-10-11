import React from 'react'

const ChatMessage = props => {
  //return JSX
  return (
    props.messages.map((message, index) => (
                <li
                  key={index}
                  className={ 
                   message.username === props.user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              )) 
)}; 


export default ChatMessage