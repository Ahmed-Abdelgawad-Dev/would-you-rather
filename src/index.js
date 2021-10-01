import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import middleware from '../src/store/middleware'
import reducer from'./store/reducers'
import {createStore} from "redux";



export const store = createStore(reducer, middleware)

ReactDOM.render(
	<Router>
		<Switch>
			<StoreProvider store={store}>
				<App />
			</StoreProvider>
		</Switch>
	</Router>,
  document.getElementById('root')
);