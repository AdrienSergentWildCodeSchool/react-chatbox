import React, { useState } from 'react' 

const SendInput = (props) => {
    const [messageValue, setMessageValue] = useState("")
    // const [idCount, setIdCount] = useState(1)
    
    const handleChange = (event) => {
        setMessageValue(event.target.value)
    }
    
    console.log(messageValue, 'messageValue')
    
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
        <div style={{marginTop: "10%"}}>
            <form onSubmit={handleSubmit}> 
                <input value={messageValue} onChange={(event) => handleChange(event)}/>
                <button type="submit"> Send </button>
            </form>
        </div>
    )
}

export default SendInput