import React, { useState } from 'react';
import ChatInputBox from './ChatInputBox';
import ChatMessageList from './ChatMessageList';
import { v4 }  from 'uuid';

function Chat() {
  const [chatMessages, setChatMessages] = useState([
    // {
    //   id: v4(),
    //   username: "John117",
    //   scribbleDataURL: '',
    // },
    // {
    //   id: v4(),
    //   username: "ssjVegeta99",
    //   scribbleDataURL: '',
    // },
    // {
    //   id: v4(),
    //   username: "MetroidGamer94",
    //   scribbleDataURL: '',
    // }
  ]);

  const handleInputSubmit = (username, dataURL) => {
    const newMessage = {
      id: v4(),
      username,
      scribbleDataURL: dataURL
    }
    setChatMessages([...chatMessages, newMessage]);
  }
  return (
    <React.Fragment>
      <ChatMessageList chatMessages={chatMessages}/>
      <ChatInputBox onSubmit={handleInputSubmit}/>
    </React.Fragment>
  );
}

export default Chat;