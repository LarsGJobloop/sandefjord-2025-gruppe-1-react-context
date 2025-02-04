import { createContext, useContext, useState } from "react";

const counterContext = createContext()

export function CounterContextProvider({children}) {
  // State we need to track
  const [count, setCount] = useState(0)

  // Function to operate on it
  function increment() {
    setCount(oldValue => oldValue + 1)
  }

  function decrement() {
    setCount(oldValue => oldValue - 1)
  }

  function reset() {
    setCount(0)
  }

  // The context we want to share
  const context = {
    count,
    increment,
    decrement,
    reset
  }

  return (
    <counterContext.Provider value={context}>
      {children}
    </counterContext.Provider>
  )
}

export function useCounterContext() {
  const context = useContext(counterContext)

  if (!context) {
    throw new Error("useCounterContext is used outside a CounterContext! Please fix!")
  }

  return context
}