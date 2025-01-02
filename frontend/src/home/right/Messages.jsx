import React from "react";
import Message from "./Message";
function Messages() {
  return (
    <div style={{minHeight:'calc(90vh - 4.4vh)',maxHeight:'calc(90vh - 4.4vh)'}} className="flex-aman overflow-y-auto ">
      <Message></Message>
      
      
    </div>
  );
}

export default Messages;
