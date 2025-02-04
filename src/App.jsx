import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/about/AboutPage"
import { CounterContextProvider, useCounterContext } from "./contexts/counterContext/counterContext"
import { ChatPage } from "./pages/chat/ChatPage"

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/chat">Chat</Link></li>
            </ul>
          </nav>
        </header>

        <CounterContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </CounterContextProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
