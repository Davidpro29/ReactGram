import './Message.css'

const Message = ({msg, type}) => {
    return (
        <div clasName={`message ${type}`}>
            <p>{msg}</p>
        </div>
    )
}

export default Message;