import React, { useState, useRef, useEffect } from 'react';
import ChatInputBox from './ChatInputBox';
import ChatMessageList from './ChatMessageList';
import { db } from './../firebase';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, serverTimestamp } from "firebase/firestore"

function Chat() {
  const messagesRef = collection(db, 'messages');
  const [chatMessages, setChatMessages] = useState([]);
  const chatBottomRef = useRef();

  const convertSnapToMessage = (messageSnap) => (
    {...messageSnap.data(), id: messageSnap.id}
  );

  const scrollToBottom = () => {
    chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const handleInputSubmit = async (username, dataURL) => {
    const newMessage = {
      username,
      scribbleDataURL: dataURL,
      timestamp: serverTimestamp()
    }
    const docRef = await addDoc(messagesRef, newMessage);
    await addMessageDocToState(docRef);
    scrollToBottom();
  }

  const addMessageDocToState = async (messageDocRef) => {
    const messageSnap = await getDoc(messageDocRef);
    if (messageSnap.exists()) {
      const message = convertSnapToMessage(messageSnap);
      setChatMessages([...chatMessages, message]);
    }
    else {
      console.log("docSnap not found, chatMessages state not updated");
    }
  }

  const getChatMessages = async () => {
    const querySnapshot = await getDocs(messagesRef);
    const messages = querySnapshot.docs.map((doc) => convertSnapToMessage(doc));
    return messages;
  }
  
  useEffect(() => {
    getChatMessages().then((chatMessages) => {
      setChatMessages(chatMessages);
    })
  }, []);

  useEffect(() => {
    console.log(chatMessages);
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