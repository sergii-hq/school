import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App'


ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();





// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components_first/App'
// import {rootReducer} from './store_first/reducers'
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux'
//
//
// export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
// export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';
//
// const store = createStore(rootReducer);
//
// ReactDOM.render(<Provider store={store}>
//     <App/>
// </Provider>, document.getElementById('root'));
// serviceWorker.unregister();
