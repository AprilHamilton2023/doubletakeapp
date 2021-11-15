import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Textbook from '../components/Textbook'

class Textbooks extends React.Component {
    state = {
        textbooks: [],
        loading: true,
        error: false,
        content:'',
    }

    contentChanged = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    saveTextbook = (event) =>{
        console.log(event.currentTarget)
        fetch("api/textbooks", {
            method: "POST",
            credentials: 'include',
            headers: {
                'content-Type' : 'application/json'
            },
            body: JSON.stringify({content: this.state.content})
        })
        .then( res => {
            if(res.ok){
                return res.json()
            }

            throw new Error('Content Validation')
        })
        .then(post => {
            this.setState({
                success: true,
            });
        })
        .catch(err => {
            this.setState({
                error: true,
            })
        })
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
        let errorMesssage = null;
        if(this.state.error){
            errorMesssage = (
                <div className="alert alert-danger">
                    "There was an error saving the textbook"
                </div>
            )
        }

        return(
        <>
        <div className="form">
            {errorMesssage}
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
                    <Form.Label>Edition</Form.Label>
                    <Form.Control type="text" placeholder="Enter the edition number here" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control inline type="text" placeholder="Which coure is this book for?" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control inline type="text" placeholder="What is the coure's code for this book?" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control inline type="number" placeholder="Enter the price name here" />
                </Form.Group>
                <Form.Check inline name="neworused" type="radio" label="New" id="neworused"/>
                <Form.Check inline name="neworused" label="Used" type="radio" id="neworused"/>
                
                <br/>
                <Button type="submit" onClick={this.saveTextbook} >Sell TextBook</Button>
            </Form>
        </div>
        <div>

        </div>

        </>
        )
    }
}

export default Textbooks
