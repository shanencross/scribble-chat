import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const canvasStyle = {
  outline: '2px solid rgb(4, 209, 113)',
}

const usernameStyle = {
  color: 'rgb(0, 255, 200)',
  fontFamily: 'Brush Script MT',
  fontSize: '25px',
  paddingTop: '25px',
  margin: 0
}

const dateTimeStyle = {
  color: 'rgb(11, 218, 255)',
  fontSize: '10px',
  fontFamily: 'Courier New',
  padding: 0
}

function ChatMessage({message={}}) {
  const canvasRef = useRef();
  const ctxRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext('2d');
    const ctx = ctxRef.current;

    let img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
    img.src = message.scribbleDataURL;

  }, [message]);

  function getDateStringFromTimestamp(timestamp) {
    const date = timestamp.toDate();
    return date.toLocaleString();
  }

  return (
    <React.Fragment>
      <div id='messageContainer'/>
      <p style={usernameStyle}>{message.username}</p>
      <p style={dateTimeStyle}>{getDateStringFromTimestamp(message.timestamp)}</p>
      
      <canvas style={canvasStyle} ref={canvasRef} width={500} height={200}/>
    </React.Fragment>
  );
}

ChatMessage.propTypes = {
  message: PropTypes.object
};

export default ChatMessage;