import React from 'react';
import PropTypes from 'prop-types';
import ScribbleCanvas from './ScribbleCanvas';

function ChatMessage({message={}}) {
  return (
    <React.Fragment>
      <p><em>{message.user}</em></p>
      <ScribbleCanvas width={500} height={200}/>
    </React.Fragment>
  );
}

ChatMessage.propTypes = {
  message: PropTypes.object
};

export default ChatMessage;