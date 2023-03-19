import React, {useState} from 'react' 

const Message = (props) => {
    const [messageEdit, setMessageEdit] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    const [messageSendId, setMessageSendId] = useState()
    
    const handleDelete = (messageId) => {
        props.setMessageSend(props.messageSend.filter(message => message.id !== messageId))
    }
    
    const handleEdit = (messageId, messageText) => {
        setMessageEdit(messageText)
        setMessageSendId(messageId)
        setIsEdit(true)
    }
    
    const handleChange = (event) => {
        setMessageEdit(event.target.value)
    }
    
    const handleSubmit = (event, messageId, messageAuthor) => {
        event.preventDefault()
        
        const messageSendEdit = props.messageSend.map((message) => {
            if(message.id === messageId && props.author === messageAuthor) {
                message.message = messageEdit
            }
            return message
        })
        
        props.setMessageSend([...messageSendEdit])
        setIsEdit(false)
    }

    return (
        <div>
            Message : 
            {props?.messageSend.length > 0 && props?.messageSend?.map((message) => {
                return (
                    <div className={props.author !== message.author && "message-send"}>
                        <span> {message.author}</span>
                        
                        <form onSubmit={(event) => handleSubmit(event, message.id, message.author)}> 
                            <input disabled={!isEdit} onChange={(event) => handleChange(event)} className={props.author === message.author ? "input-send-author" : "input-send-another-author"} value={isEdit && message.id === messageSendId ? messageEdit : message.message} /> 
                            {message.author === props.author && <span onClick={() => handleDelete(message.id)}> X </span>}
                            {message.author === props.author && <img alt="edit-icon" className="icon-edit" src={"https://icons-for-free.com/iconfiles/png/512/edit+pen+pencil+icon-1320183237584811650.png"} onClick={() => handleEdit(message.id, message.message)} />}
                        </form>
                    </div>

                )
})
            }
        </div>
    )
}

export default Message