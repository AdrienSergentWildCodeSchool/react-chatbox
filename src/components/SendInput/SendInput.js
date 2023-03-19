import React, { useState } from 'react' 

const SendInput = (props) => {
    const [messageValue, setMessageValue] = useState("")
    
    const handleChange = (event) => {
        setMessageValue(event.target.value)
    }
        
    const handleSubmit = (event) => {
        event.preventDefault()
        
        let newMessage = {
            id: props.idCount,
            author: props.author,
            message: messageValue
        }
        
        props.setMessageSend([...props.messageSend, newMessage])
        props.setIdCount(props.idCount + 1)
        setMessageValue("")
    }
    
    return (
        <div className="send-input">
            <form onSubmit={handleSubmit}> 
                <input value={messageValue} onChange={(event) => handleChange(event)}/>
                <button type="submit"> Send </button>
            </form>
        </div>
    )
}

export default SendInput