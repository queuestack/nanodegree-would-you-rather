import { ActionTypes } from '../constants'

export const setAuthedUser = (id) => {
    return {
        type: ActionTypes.SET_AUTHED_USER,
        id,
    }
}