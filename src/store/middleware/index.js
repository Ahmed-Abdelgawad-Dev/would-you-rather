import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import logger from "./logger";
import {composeWithDevTools} from "redux-devtools-extension";


export default composeWithDevTools(applyMiddleware(thunk, logger))


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),