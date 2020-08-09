import { combineReducers } from "redux";

import reducerOne from './reducers/reducerOne'
import reducerTwo from './reducers/reducerTwo'

export default combineReducers({
    reducerOne,
    reducerTwo
})
