import { useState, useEffect } from 'react'

function useEasternTime() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function LocalTime() {
  const time = useEasternTime()
  return <p>Eastern time: {time.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}</p>
}
