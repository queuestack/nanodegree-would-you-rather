export const OPTION_ONE = 'OPTION_ONE'
export const OPTION_TWO = 'OPTION_TWO'

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export const formatQuestion = (question, author, authedUser) => {
    const { id, timestamp, optionOne, optionTwo } = question
    const { name, avatarURL } = author

    return ({
        name,
        id, 
        timestamp,
        avatar: avatarURL,
        optionOneVotes: optionOne.votes.length,
        optionTwoVotes: optionTwo.votes.length,
        optionOneText: optionOne.text,
        optionTwoText: optionTwo.text,
        voted: optionOne.votes.includes(authedUser) 
                ? OPTION_ONE
                : optionTwo.votes.includes(authedUser)
                    ? OPTION_TWO
                    : null

    })
}
