import React, { useState, useRef, useEffect } from 'react';
import ChatInputBox from './ChatInputBox';
import ChatMessageList from './ChatMessageList';
import { db } from './../firebase';
import { addDoc, collection, getDoc, getDocs, query, orderBy, serverTimestamp, onSnapshot, snapshotEqual } from "firebase/firestore"

function Chat() {
  const [messagesCollectionRef] = useState(collection(db, 'messages'));
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
    const docRef = await addDoc(messagesCollectionRef, newMessage);
    scrollToBottom();
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages])

  useEffect(() => {
    const listenToMessagesCollection = () => {
      const q = query(messagesCollectionRef, orderBy("timestamp"));
      console.log("subscribing");
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        console.log("snapshot");
        querySnapshot.docChanges().forEach((change) => {
          console.log(change.type);
        })
        const messages = querySnapshot.docs.map((doc) => convertSnapToMessage(doc));
        setChatMessages(messages);
      });
    }

    listenToMessagesCollection();
    return () => unsubscribe();
  }, [messagesCollectionRef]);

  return (
    <React.Fragment>
      <ChatMessageList chatMessages={chatMessages}/>
      <ChatInputBox onSubmit={handleInputSubmit}/>
      <div ref={chatBottomRef} style={{float: "left", clear: "both" }}/>
    </React.Fragment>
  );
}

export default Chat;