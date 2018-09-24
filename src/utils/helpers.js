export const formatQuestion = (question, author, authedUser) => {
    const { id, author, timestamp, optionOne, optionTwo } = question
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
        hasVoted: optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
    })
}
