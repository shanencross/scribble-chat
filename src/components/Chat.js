import React, { useState, useRef, useEffect } from 'react';
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
  const chatBottomRef = useRef();

  const handleInputSubmit = (username, dataURL) => {
    const newMessage = {
      id: v4(),
      username,
      scribbleDataURL: dataURL
    }
    setChatMessages([...chatMessages, newMessage]);
  }

  const scrollToBottom = () => {
    chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages])

  return (
    <React.Fragment>
      <ChatMessageList chatMessages={chatMessages}/>
      <ChatInputBox onSubmit={handleInputSubmit}/>
      <div ref={chatBottomRef} style={{float: "left", clear: "both" }}/>
    </React.Fragment>
  );
}

export default Chat;