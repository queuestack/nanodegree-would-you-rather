import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionPage extends Component {
    render() {
        const { id } = this.props
        
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

    return {
        id,
        question
    }
}

export default connect(mapStateToProps)(QuestionPage);