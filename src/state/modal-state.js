// ActionTypes:
const TOGGLE_MODAL = 'TOGGLE_MODAL'

// Actions:
export const toggleModal = () => ({
  type: TOGGLE_MODAL
})

// Set InitialState
export const initialModalState = {
  show: false
}

// Reducer
export const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { show: !state.show }
    default:
      return state
  }
}
