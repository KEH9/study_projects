document.getElementById('root').innerHTML = 'Привет, я готов.';
module.hot.accept();

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './stores/configureStore'

const store = configureStore()


render(
  <Provider store={store}>
    <div className='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);





//
//document.getElementById('root').innerHTML = 'Все же индексыаыаыа.';
//module.hot.accept();
