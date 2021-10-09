import React from 'react';
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage';

function ChatMessageList({chatMessages=[]}) {
  return (
    <React.Fragment>
      {chatMessages.map((message) => {
        <ChatMessage key={message.id} message={message}/>
      })}
    </React.Fragment>
  );
}

ChatMessageList.propTypes = {
  chatMessages: PropTypes.func
};

export default ChatMessageList;