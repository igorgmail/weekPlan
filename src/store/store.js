import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import taskReducer from './reducers/taskReducer'
import appReducer from './reducers/appReducer'

const rootReducer = combineReducers({
  tasks: taskReducer,
  app: appReducer,
  title: () => 'WeekPlan'
})
const store = createStore(rootReducer, composeWithDevTools())

export default store