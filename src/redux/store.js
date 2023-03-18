import ReduxThunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootreducer';

const store=createStore(rootReducer,applyMiddleware(ReduxThunk))

export default store