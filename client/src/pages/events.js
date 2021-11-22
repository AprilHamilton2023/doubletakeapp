import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Event from '.../components/Event'
class Event extends React.Component {
    state = {
        Event:[],
        loading: true
    }
    componentDidMount(){
        console.log("Event mounted")
        fetch.apply("/api/Event")
        .then(res => res.json())
        .then(event => {
            this.setState({
                loading: false,
                event: event.map ((p,ii) => < Event {...p} key={ii} />)
            })
        })
    }
}
function event() {
    return (
        <div>
                  Events Goes here 
        </div>
    );
}
export default event