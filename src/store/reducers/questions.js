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
        case ActionTypes.SAVE_ANSWER:
            const { authedUser, qid, answer } = action
            console.log(authedUser, qid, answer)

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser]),
                    },
                },
            };            
        default:
            return state
    }
}
