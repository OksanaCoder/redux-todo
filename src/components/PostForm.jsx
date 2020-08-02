import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
    
   addTask: (someText) => dispatch({
       type: 'NEW_POST',
       payload: someText
   })

})
class PostForm extends Component {
    state = {
        task: ""
    }

    componentDidMount = async () => {
        await  this.props.addTask()
        console.log(this.props)
     }
//    onChange = (e) =>{
//        this.setState({ task : e.target.value })
      
//    }
//    submitTask = (e) => {
//        e.preventDefault()
//       this.setState({ tasks : this.state.task })
//    }
    render() {
        console.log(this.props)
        return (
            <Container>
                <h5>Enter task:</h5>
                {/* <input type='file' name='image'/>
                <button type='submit' value='send image'/> */}
                <Form>
                    <Form.Group controlId="formBasicToDo">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" placeholder="Enter your todo" value={this.state.task} onChange={(e ) => this.setState({ task : e.target.value })}/>
                    </Form.Group>
                    <Button variant="primary" onSubmit={this.props.addTask}>
                        Add
                    </Button>
                    <ul>
                    {/* {this.state.tasks.map(i => {
                        return (
                          
                                <li>
                                        {i}
                                </li>
                        
                        )
                    })} */}
                        </ul>
                </Form>
            </Container>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostForm)