import * as types from '../actions/actionTypes'

interface IAction {
  type: string
}

interface IState {
  pages: object
}

const INITIAL_STATE = {
  pages: {}
}

const DEFAULT_ACTION = {
  type: ''
}

export default function pagesReducer(
  state: IState = INITIAL_STATE,
  action: IAction = DEFAULT_ACTION): object {
    switch (action.type) {
      case types.PAGE_GET:
        return state
      default:
        return state
    }
}
