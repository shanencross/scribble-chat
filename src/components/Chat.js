import React from 'react';
import ChatInputBox from './ChatInputBox';
import ChatMessageList from './ChatMessageList';

function Chat() {
  return (
    <React.Fragment>
      <ChatMessageList/>
      <ChatInputBox/>
    </React.Fragment>
  );
}

export default Chat;