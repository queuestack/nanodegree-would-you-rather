import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { questionIDs } = this.props;

        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    {questionIDs.map((id) => (
                        <li key={id}>
                            <div>Question ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ questions }) => {
    return {
        questionIDs: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)