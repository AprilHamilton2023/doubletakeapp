import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Chat from '.../components/Chat'
class Chat extends React.Component {
    state = {
        Chat:[],
        loading: true
    }
    componentDidMount(){
        console.log("Chat mounted")
        fetch.apply("/api/Chat")
        .then(res => res.json())
        .then(chat => {
            this.setState({
                loading: false,
                chat: chat.map ((p,ii) => < Chat {...p} key={ii} />)
            })
        })
    }
}
function chat() {
    return (
        <div>
        </div>
    );
}
export default chat