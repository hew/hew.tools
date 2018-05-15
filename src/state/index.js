import { createStore, combineReducers } from 'redux'
import { modalReducer } from './modal-state'
import { navModalReducer } from './nav-modal-state'

// createStore(reducer, [preloadedState], [enhancer])
const store = () => createStore( 
  combineReducers({
    navModal: navModalReducer,
    modal: modalReducer
  }),
)

export default store
