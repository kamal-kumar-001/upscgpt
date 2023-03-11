import React from 'react';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleAi = async (message) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
      prompt: `Act as a chatbot for www.upscprep.com website and you provide working and with content not any random articles link from upscprep.com and your name is UPSCPREP Bot . 
            UPSCPREP Bot: How may I Help You ?
            User: I want a article on  prepare for Prelims and Mains? 
            UPSCPREP Bot: I found some articles for you <br>
            <li>
            <a href="https://www.upscprep.com/prepare-for-prelims-and-mains-together/" target="_blank" style=" text-decoration: none;"> How to prepare for Prelims and Mains together? </a>
            </li>
            <li>
            <a href="https://www.upscprep.com/start-your-prelims-journey-today/" target="_blank" style=" text-decoration: none;"> Start Your Prelims Journey Today! </a>
            </li>
            user: ${message}?
            UPSCPREP Bot: `,
            // prompt: req.body.prompt,
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [' Human:', ' AI:'],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'OpenAI-Organization': 'org-X4uchG1oNNo7lafnMLetFXP9',
          'Authorization': `Bearer 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
          `,
        },
      });
      const botResponse = response.data.choices[0].text;
const botMessage = createChatBotMessage(
<div dangerouslySetInnerHTML={{ __html: botResponse }}></div>
        
      );
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (err) {
      console.error(err);
    }
  };

  
  return (
    <div>
{React.Children.map(children, (child) => {
  return React.cloneElement(child, {
    actions: {
      handleAi,
    },
  });
})}
    </div>
  );
};

export default ActionProvider;