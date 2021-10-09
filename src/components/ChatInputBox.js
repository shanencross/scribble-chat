import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ScribbleCanvas from './ScribbleCanvas';

function ChatInputBox({width=500, height=200, onSubmit}) {
  const [dataURL, setDataURL] = useState();
  const usernameInputRef = useRef();

  const updateDataURL = (dataURL) => {
    setDataURL(dataURL);
  }

  return (
    <React.Fragment>
      <div>
        <h3>Draw scribble message:</h3>
        <ScribbleCanvas width={width} height={height} updateDataURL={updateDataURL}/>
        <input ref={usernameInputRef} placeholder='Enter username'/>
        <button onClick={() => onSubmit(usernameInputRef.current.value, dataURL)}>Send scribble</button>
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