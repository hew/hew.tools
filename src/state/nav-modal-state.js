// ActionTypes:
const TOGGLE_NAV_MODAL = 'TOGGLE_NAV_MODAL'

// Actions:
export const toggleNavModal = () => ({
  type: TOGGLE_NAV_MODAL
})

// Set InitialState
export const initialNavModalState = {
  show: false
}

// Reducer
export const navModalReducer = (state = initialNavModalState, action) => {
  switch (action.type) {
    case TOGGLE_NAV_MODAL:
      return { show: !state.show }
    default:
      return state
  }
}
