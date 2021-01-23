import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import projectsReducer from "./Projects_Reducer";


const redusers = combineReducers({
    form: formReducer,
    projectsReducer: projectsReducer
})


let store = createStore(redusers);

export default store;