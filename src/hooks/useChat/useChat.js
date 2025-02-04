import { useState } from "react"

const startHistory = [
  {
    message: "Hey",
    timeStamp: new Date("2024"),
    sender: {
      alias: "Per",
      avatarUrl: new URL("https://my-chat.com/avatars/per")
    }
  },
  {
    message: "Hello",
    timeStamp: new Date("2025"),
    sender: {
      alias: "Pål",
      avatarUrl: new URL("https://my-chat.com/avatars/pål")
    }
  },
]

export function useChat() {
  const [chatHistory, setChatHistory] = useState(startHistory)

  function sendMessage(newMessage, sender) {
    const newEntry = {
      message: newMessage,
      timeStamp: new Date(),
      sender,
    }

    setChatHistory((oldHistory) => [...oldHistory, newEntry])
  }

  return {
    chatHistory,
    sendMessage,
  }
}