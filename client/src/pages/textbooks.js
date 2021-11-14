import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Textbook from '../components/Textbook'

class Textbooks extends React.Component {
    state = {
        textbooks: [],
        loading: true
    }

    componentDidMount(){
        console.log("Textbooks mounted")
        fetch("/api/textbooks")
        .then(res => res.json())
        .then(textbooks => {
            this.setState({
                loading : false,
                textbooks: textbooks.map((p,ii) => <Textbook {...p} key={ii} />)
            })
        })
    }
    render(){
        return(
        <>
        <div className="form">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter the textbook title here" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter the auther name here" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control inline type="text" placeholder="Which coure is this book for?" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control inline type="number" placeholder="Enter the price name here" />
                </Form.Group>
                <Form.Check inline name="neworused" type="radio" label="New" id="neworused"/>
                <Form.Check inline name="neworused" label="Used" type="radio" id="neworused"/>
                
                <br/>
                <Button type="submit" >Sell TextBook</Button>
            </Form>
        </div>
        <div>

        </div>

        </>
        )
    }
}

export default Textbooks
