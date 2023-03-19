import React, {useState} from 'react' 

const Message = (props) => {

    const [isEdit, setIsEdit] = useState(false)
    console.log(props, 'propsMessage')
    
    const handleDelete = (messageId) => {
        console.log("delete")
        console.log(messageId)
        props.setMessageSend(props.messageSend.filter(message => message.id !== messageId))
    }
    
    const handleEdit = (messageId) => {
        console.log("edit")
        console.log(messageId)
        setIsEdit(true)
        props.setMessageSend(props.messageSend.filter(message => message.id !== messageId))
    }
    
    return (
        <div>
            Message : 
            {props?.messageSend.length > 0 && props?.messageSend?.map((message) => {
                return (
                    <>
                    { isEdit ? <input value={message.message}/> : <div style={{backgroundColor: props.author === message.author ? "blue" : "red"}}> {message.message} </div> }
                    <span onClick={() => handleDelete(message.id)}> X </span>
                    <span onClick={() => handleEdit(message.id)}> Edit </span>
                    </>

                )
})
            }
        </div>
    )
}

export default Message