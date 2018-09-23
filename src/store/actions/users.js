import { ActionTypes } from '../constants'

export const receiveUsers = (users) => {
    return {
        type: ActionTypes.RECEIVE_USERS,
        users,
    }
}