import { useLocation } from "react-router-dom"

export function CurrentUrl() {
  const location = useLocation()

  return (
    <div>
      <p>URL: {location.pathname}</p>
      <p>Hash: {location.hash}</p>
      <p>State: {JSON.stringify(location.state)}</p>
    </div>
  )
}