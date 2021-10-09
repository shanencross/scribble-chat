import React from 'react';
import ChatInputBox from './ChatInputBox';
import ChatMessageList from './ChatMessageList';

const chatMessages = [
  {
    user: "John117",
    scribbleDrawing: {},
  },
  {
    user: "ssjVegeta99",
    scribbleDrawing: {},
  },
  {
    user: "MetroidGamer94",
    scribbleDrawing: {},
  }
]

function Chat() {
  return (
    <React.Fragment>
      <ChatMessageList chatMessages={chatMessages}/>
      <ChatInputBox/>
    </React.Fragment>
  );
}

export default Chat;