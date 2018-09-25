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

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
    }
}

const saveAnswer = (authedUser, qid, answer) => {
    return {
        type: ActionTypes.SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export const handleSaveAnswer = (qid, answer) => {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return saveQuestionAnswer({
            authedUser, 
            qid, 
            answer
        })
            .then(() => dispatch(saveAnswer(authedUser, qid, answer)))
    }
}