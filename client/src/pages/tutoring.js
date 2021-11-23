import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Tutoring from '../components/Tutoring'

class Tutoring extends React.Component {
    state = {
        Tutoring: [],
        loading: true
    }

    componentDidMount(){
        console.log("Tutoring mounted")
        fetch("/api/Tutoring")
        .then(res => res.json())
        .then(tutoring => {
            this.setState({
                loading : false,
                tutoring: tutoring.map((p,ii) => <Tutoring {...p} key={ii} />)
            })
        })
    }
    render(){
        return(
        <>
        <div className="form">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control inline type="text" placeholder="Enter course name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control inline type="text" placeholder="Enter course code" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control inline type="text" placeholder="Enter course subject" />
                </Form.Group>
                <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Course
                    </Dropdown.Toggle>
                     <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">CSCI 272 Object-Oriented Programming</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">CSCI 274 Computer Architecture</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">CSCI 276 Systems Analysis and Design</Dropdown.Item>
                 </Dropdown.Menu>
                </Dropdown>
                <Form.Group className="mb-3">
                    <Form.Label>Availability</Form.Label>
                    <Form.Control inline type="text" placeholder="Enter the availabile times in the fromat day month/day/year" />
                </Form.Group>
                <br/>
                <Button type="submit" >Post request</Button>
            </Form>
        </div>
        <div>

        </div>

        </>
        )
    }
}

export default Tutoring
