import { ActionTypes } from '../constants'
import { saveQuestion, saveQuestionAnswer } from '../../utils/api'

export const receiveQuestions = (questions) => {
    return {
        type: ActionTypes.RECEIVE_QUESTIONS,
        questions,        
    }
}

const addQuestion = (question) => {
    return {
        type: ActionTypes.ADD_QUESTION,
        question,
    }
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        // save database first, get the saved result from DB and add it to reducer
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
    }
}