import React, { useState, useRef, useEffect } from 'react';
import ChatInputBox from './ChatInputBox';
import ChatMessageList from './ChatMessageList';
import { db } from './../firebase';
import { addDoc, collection, query, orderBy, serverTimestamp, onSnapshot } from "firebase/firestore"

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
    await addDoc(messagesCollectionRef, newMessage);
    scrollToBottom();
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages])

  useEffect(() => {
    const listenToMessagesCollection = () => {
      const q = query(messagesCollectionRef, orderBy("timestamp"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        if (!querySnapshot.metadata.hasPendingWrites) {
          const messages = querySnapshot.docs.map((doc) => convertSnapToMessage(doc));
          setChatMessages(messages);
        }
      });
      return unsubscribe;
    }

    const unsubscribe = listenToMessagesCollection();
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