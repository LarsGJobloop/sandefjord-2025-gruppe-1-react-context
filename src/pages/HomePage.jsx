import { CurrentUrl } from "../components/CurrentUrl/CurrentUrl"
import { useCounterContext } from "../contexts/counterContext/counterContext"

export function HomePage() {
  const {count, increment, decrement, reset} = useCounterContext()

  return (
    <main>
      <h1>Main Page</h1>

      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      <CurrentUrl />
    </main>
  )
}