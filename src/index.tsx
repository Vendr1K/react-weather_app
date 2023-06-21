import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './App';
import './styles/global.scss';
import { ThemeProvider } from './provider/ThemeProvider';

const store = setupStore()

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
     <ThemeProvider>
       <App />
     </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  // document.getElementById('test')

);







