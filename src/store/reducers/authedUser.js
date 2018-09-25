import { ActionTypes } from '../constants'

export default (state = null, action) => {
    switch(action.type) {
        case ActionTypes.SET_AUTHED_USER:
            return action.id
        case ActionTypes.LOGOUT:
            return null
        default:
            return state
    }
}
