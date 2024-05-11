import React from 'react'
import ChatBot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';

import ActionProvider from "./ActionProvider"
import MessageParser from "./MessageParser"
import config from "./config"

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <ChatBot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />

      </header>

    </div>
  )
}

export default App