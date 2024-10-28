import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { TodoContextProvider } from './context'

ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
  , document.getElementById('root')
)
