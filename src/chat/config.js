import {
  createChatBotMessage,
} from 'react-chatbot-kit';

const botName = 'UPSCprep Bot ';

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "",
    },
    chatButton: {
      backgroundColor: "#2898ec",
    },
  },
};

export default config;