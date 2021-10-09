import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const canvasStyle = {
  outline: '2px solid green',
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

  }, []);

  return (
    <React.Fragment>
      <div id='messageContainer'/>
      <p><em>{message.username}</em></p>
      <canvas style={canvasStyle} ref={canvasRef} width={500} height={200}/>
    </React.Fragment>
  );
}

ChatMessage.propTypes = {
  message: PropTypes.object
};

export default ChatMessage;