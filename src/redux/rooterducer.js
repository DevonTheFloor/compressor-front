import headerBarReducer from '../components/header-bar/redux-header-bar/reducer'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    headerBardState: headerBarReducer
})

const store = createStore(rootReducer)

export default store



