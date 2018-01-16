import * as types from './mutation-types'

export const SIGN_IN = ({commit}, userPayload) => {
  commit(types.SIGN_IN, userPayload)
}

export const SIGN_OUT = ({commit}) => {
  commit(types.SIGN_OUT)
}
export const SET_EVENTS = ({commit}, eventsPayload) => {
  commit(types.SET_EVENTS, eventsPayload)
}
