import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, withRouter, Link} from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(fetchPosts())
})
const fetchPosts = () => {
    return (dispatch)  => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(pictures => {
            console.log(pictures)
            return dispatch({
                type: 'FETCH_POSTS',
                payload: pictures
            })
        }
           );
    }
}

const image = {
    width : '200px'
}
class Posts extends Component {
    componentDidMount = async () => {
       await  this.props.getData()
       console.log(this.props)
    }
        render() {
            console.log(this.props)
            return (
                <Container>
                    <h3 style={{textAlign: 'center', marginTop: '40px'}}>Fetched image placeholders</h3>
                    <Row style={{display: 'flex', marginTop: '40px'}}>
                        { this.props.items.slice(0, 20).map(item => {
                            return(
                                
                                <Col className='img' lg={2} md={2} sm={6} style={{margin: '10px'}}>
                                    <img src={item.url} style={image}/>
                                </Col>
                            )
                        })}
                       
                    </Row>
                </Container>
            )
        }
}


export default 
    connect(mapStateToProps, mapDispatchToProps)(Posts)
