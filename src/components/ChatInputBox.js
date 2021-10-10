import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ScribbleCanvas from './ScribbleCanvas';

function ChatInputBox({width=500, height=200, onSubmit}) {
  const canvasRef = useRef();
  const usernameInputRef = useRef();
  const sendButtonRef = useRef(); 

  const clearCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  const handleCanvasUpdate = (canvas) => {
    canvasRef.current = canvas;
  }

  const onSendClick = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    onSubmit(usernameInputRef.current.value, dataURL);
    clearCanvas(canvas);
  }

  const onInputEnterPress = (e) => {
    if (e.key === 'Enter') {
      sendButtonRef.current.click();
    }
  }

  return (
    <React.Fragment>
      <div>
        <h3>Draw scribble message:</h3>
        <ScribbleCanvas width={width} height={height} onCanvasUpdate={handleCanvasUpdate}/>
        <input ref={usernameInputRef} onKeyPress={onInputEnterPress} placeholder='Enter username'/>
        <button ref={sendButtonRef} onClick={onSendClick}>Send scribble</button>
      </div>
    </React.Fragment>
  );
}

ChatInputBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onSubmit: PropTypes.func
};

export default ChatInputBox;