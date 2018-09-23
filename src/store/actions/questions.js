import { ActionTypes } from '../constants'

export const receiveQuestions = (questions) => {
    return {
        type: ActionTypes.RECEIVE_QUESTIONS,
        questions,        
    }
}