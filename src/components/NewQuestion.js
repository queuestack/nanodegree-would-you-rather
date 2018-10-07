import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../store/actions/questions'
import { Card, Divider, Form, Button } from 'semantic-ui-react'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }
    handleOptionOneChange = (e) => {
        const text = e.target.value

        this.setState({
            optionOneText: text,
        })
    }
    handleOptionTwoChange = (e) => {
        const text = e.target.value

        this.setState({
            optionTwoText: text,
        })
    }
    handleSubmit = (e) => {
        const { optionOneText, optionTwoText } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOneText, optionTwoText))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true,
        }))
    }
    render() {
        const { optionOneText, optionTwoText, toHome } = this.state

        if (toHome) {
            return <Redirect to='/' />
        }

        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                        Create New Question
                    </Card.Header>
                </Card.Content>

                <Card.Content>
                    <Form className='new-question' onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <input
                                placeholder='Enter Option One Text Here'
                                value={optionOneText}
                                onChange={this.handleOptionOneChange}
                            />                        
                        </Form.Field>

                        <Divider horizontal>OR</Divider>

                        <Form.Field>
                            <input
                                placeholder='Enter Option Two Text Here'
                                value={optionTwoText}
                                onChange={this.handleOptionTwoChange}
                            /> 
                        </Form.Field>

                        <Button
                            type='submit'
                            disabled={optionOneText === '' || optionTwoText === ''}
                        >
                            Submit
                        </Button>                   
                    </Form>
                </Card.Content>

            </Card>
        )
    }
}

export default connect()(NewQuestion);