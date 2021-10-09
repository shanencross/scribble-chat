import React from 'react';
import PropTypes from 'prop-types';
import ScribbleCanvas from './ScribbleCanvas';

function ChatInputBox({width=500, height=200}) {
  return (
    <React.Fragment>
      <h3>Draw scribble message:</h3>
      <ScribbleCanvas width={width} height={height}/>
    </React.Fragment>
  );
}

ChatInputBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default ChatInputBox;