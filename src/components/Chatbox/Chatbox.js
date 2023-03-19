import React from 'react' 
import Message from '../Message/Message'
import SendInput from '../SendInput/SendInput'

const Chatbox = (props) => {

    return (
        <div className="chatbox">
            <Message messageSend={props.messageSend} setMessageSend={props.setMessageSend} author={props.author}/>
            <SendInput messageSend={props.messageSend} setMessageSend={props.setMessageSend} author={props.author} idCount={props.idCount} setIdCount={props.setIdCount}/>
        </div>
    )
}

export default Chatbox