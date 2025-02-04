import "./chat.css"
import { useState } from "react";
import { useChat } from "../../hooks/useChat/useChat";

const user = {
  alias: "Per",
  avatarUrl: new URL("https://my-chat.com/avatar/per")
}

export function Chat() {
  const { chatHistory, sendMessage } = useChat()

  const [invalidMessage, setInvalidMessage] = useState(false)
  const [newMessage, setNewMessage] = useState("")

  function submitMessage(event) {
    event.preventDefault()

    if (newMessage.length < 1) {
      setInvalidMessage(true)
      return
    }

    sendMessage(newMessage, user)
    setNewMessage("")
    setInvalidMessage(false)
  }

  return (
    <div>
      <ul>
        {chatHistory.map(entry => (
          <li key={entry.timeStamp}>
            <p>{entry.message}</p>
            <p>{entry.timeStamp.toISOString()}</p>
            <p>{entry.sender.alias}</p>
          </li>
        ))}
      </ul>

      <div>
        <form onSubmit={submitMessage}>
          <div
            className={invalidMessage ? "invalid" : ""}
          >

          <input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
          <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}