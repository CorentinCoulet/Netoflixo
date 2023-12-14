import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../store/store';
import App from './App';

const root = document.getElementById('root');
if(root){
  const reactRoot = ReactDOM.createRoot(root);

  reactRoot.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("L'élément avec l'ID 'root' n'a pas été trouvé.");
}




