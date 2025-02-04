import { useCounterContext } from "../../contexts/counterContext/counterContext"

export function AboutPage() {
  const {count} = useCounterContext()
  
  return (
    <main>
      <h1>About Page</h1>
      <p>Count: {count}</p>
    </main>
  )
}