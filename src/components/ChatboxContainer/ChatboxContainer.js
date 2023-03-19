import React, {useState} from 'react' 
import Chatbox from '../Chatbox/Chatbox'

const ChatboxContainer = () => {
    const [messageSend, setMessageSend] = useState([])
    const [authorJohn, setAuthorJohn] = useState("John")
    const [authorJulia, setAuthorJulia] = useState("Julia")

    return (
        <div className="chatbox-container">
            <Chatbox messageSend={messageSend} setMessageSend={setMessageSend} author={authorJohn} />
            <Chatbox messageSend={messageSend} setMessageSend={setMessageSend} author={authorJulia}/>
        </div>
    )
}

export default ChatboxContainer;