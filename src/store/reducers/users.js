import { ActionTypes } from '../constants'

export default (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}
