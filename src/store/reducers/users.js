import { ActionTypes } from '../constants'

export default (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ActionTypes.ADD_QUESTION:
            const { author, id } = action.question
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: [
                        ...state[author].questions,
                        id
                    ]
                }
            }
        case ActionTypes.SAVE_ANSWER:
            return {
              ...state,
              [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                  ...state[action.authedUser].answers,
                  [action.qid]: action.answer,
                },
              },
            }
      
        default:
            return state
    }
}
