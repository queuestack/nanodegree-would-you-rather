import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import NotFound from './NotFound';

class QuestionPage extends Component {
    render() {
        const { id, errorPage } = this.props

        if (errorPage) {
            return <NotFound />
        }

        return (
            <div>
                <Question id={id} />
            </div>
        )
    }
}

const mapStateToProps = ({ authedUsers, questions, users }, props) => {
    const { id } = props.match.params
    const question = questions[id]
    let errorPage = false

    if (question === undefined) {
        errorPage = true
        return {
            errorPage,
        }
    }

    return {
        id,
        question,
        errorPage
    }
}

export default connect(mapStateToProps)(QuestionPage);