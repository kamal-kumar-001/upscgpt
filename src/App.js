import './App.css';
// import { RiCloseCircleFill} from "react-icons/ri"
// import {SiChatbot} from "react-icons/si"
import React from 'react';
import config from './chat/config.js';
import MessageParser from './chat/MessageParser';
import ActionProvider from './chat/ActionProvider';
import Chatbot from 'react-chatbot-kit'
// import Loader from 'react-chatbot-kit'
// import Loader from './chat/loader';

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // }
  return (
    <div className="App">
      {/* <div className='msg-icon'>

      <Loader />
      </div>
       <div className='msg-icon' onClick={handleClick}>
        {isOpen ? <RiCloseCircleFill size={50} /> : <SiChatbot size={50}  />}
      
      </div>
      <div  className={`chatbot-container  ${isOpen ? '' : 'hidden'}`}>
      <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
         headerText='Chatbot'
         placeholderText='Input placeholder'
      />
    </div> */}
    <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
         headerText='UPSCprep Bot'
         placeholderText='Ask Me Anything'
      />
    </div>
  );
}

export default App;
