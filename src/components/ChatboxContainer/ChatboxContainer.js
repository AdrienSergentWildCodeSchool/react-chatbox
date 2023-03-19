import React, {useState} from 'react' 
import Chatbox from '../Chatbox/Chatbox'

const ChatboxContainer = () => {
    const [messageSend, setMessageSend] = useState([])
    const [idCount, setIdCount] = useState(1)

    return (
        <div className="chatbox-container">
            <Chatbox messageSend={messageSend} setMessageSend={setMessageSend} author={"John"} idCount={idCount} setIdCount={setIdCount} />
            <Chatbox messageSend={messageSend} setMessageSend={setMessageSend} author={"Julia"} idCount={idCount} setIdCount={setIdCount}/>
        </div>
    )
}

export default ChatboxContainer;