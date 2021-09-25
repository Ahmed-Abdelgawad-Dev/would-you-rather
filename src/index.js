import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import { ChakraProvider} from '@chakra-ui/react'
import { Provider as StoreProvider } from 'react-redux'
import middleware from '../src/store/middleware'
import reducer from'./store/reducers'
import {createStore} from "redux";


const store = createStore(reducer, middleware)

ReactDOM.render(
	<ChakraProvider>
		<Router>
			<Switch>
				<StoreProvider store={store}>
					<App />
				</StoreProvider>
			</Switch>
		</Router>
	</ChakraProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
