import React, { useState } from 'react' 

const SendInput = (props) => {
    const [messageValue, setMessageValue] = useState("")
    const [idCount, setIdCount] = useState(1)
    
    const handleChange = (event) => {
        setMessageValue(event.target.value)
    }
    
    console.log(messageValue, 'messageValue')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        let newMessage = {
            id: idCount,
            author: props.author,
            message: messageValue
        }
        
        props.setMessageSend([...props.messageSend, newMessage])
        setIdCount(idCount + 1)
        setMessageValue("")
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input value={messageValue} onChange={(event) => handleChange(event)}/>
            </form>
        </div>
    )
}

export default SendInput