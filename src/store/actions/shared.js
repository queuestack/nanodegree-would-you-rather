import { getInitialData } from '../../utils/api';
import { receiveQuestiosns } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'sarahedo';

export const handleInitalData = () => {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveQuestiosns(questions));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));
            })
    }
}