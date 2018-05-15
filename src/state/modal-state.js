// ActionTypes:
const TOGGLE_MODAL = 'TOGGLE_MODAL'

// Actions:
export const toggleModal = ({text}) => ({
  type: TOGGLE_MODAL,
  payload: { text }
})

// Set InitialState
export const initialModalState = {
  show: false
}

// Reducer
export const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { text: action.payload.text, show: !state.show }
    default:
      return state
  }
}
