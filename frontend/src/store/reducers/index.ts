import { combineReducers } from 'redux'

export interface Stars {
  starred: {
    [key: string]: boolean
  }
}

const initState = {
  starred: {}
}

const star = (state : Stars = initState, action : any) => {
  switch (action.type) {
    case 'TOGGLE_STAR':
      return {
        ...state,
        starred: {
          ...state.starred,
          [action.id]: !state.starred[action.id]
        }
      }
    default:
      return state
  }
}

export default combineReducers({ star })
