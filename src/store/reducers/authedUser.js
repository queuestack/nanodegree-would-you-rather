import { ActionTypes } from '../constants'

export default (state = null, action) => {
    switch(action.type) {
        case ActionTypes.SET_AUTHED_USER:
            return action.id
        default:
            return state
    }
}
