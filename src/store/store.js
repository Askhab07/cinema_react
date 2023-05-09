import {createStore} from 'redux'
import cinema from './reducers/cinema';

export const store = createStore(cinema);