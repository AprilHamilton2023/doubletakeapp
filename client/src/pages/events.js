import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Events from '.../components/Event'
class Events extends React.Component {
    state = {
        Events:[],
        loading: true
    }
    componentDidMount(){
        console.log("Events mounted")
        fetch.apply("/api/Event")
        .then(res => res.json())
        .then(event => {
            this.setState({
                loading: false,
                event: event.map ((p,ii) => < Events {...p} key={ii} />)
            })
        })
    }
}
function events() {
    return (
        <div>
                  Events Goes here 
        </div>
    );
}
export default events