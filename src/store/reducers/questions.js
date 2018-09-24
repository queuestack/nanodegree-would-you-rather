import { ActionTypes } from '../constants'


export default (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ActionTypes.ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [action.question.id]: question,
            }
        default:
            return state
    }
}
