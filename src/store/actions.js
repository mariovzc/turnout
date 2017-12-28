import * as types from './mutation-types'

export const SIGN_IN = ({commit}, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}