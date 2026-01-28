import { useEffect, useMemo, useState } from 'react'

export default function Typewriter({
  text,
  speedMs = 48,
  startDelayMs = 250,
  className = '',
}) {
  const chars = useMemo(() => Array.from(text ?? ''), [text])
  const [i, setI] = useState(0)

  useEffect(() => {
    setI(0)
  }, [text])

  useEffect(() => {
    if (!text) return
    if (i >= chars.length) return

    const startT = setTimeout(() => {
      const t = setInterval(() => {
        setI((v) => {
          if (v + 1 >= chars.length) {
            clearInterval(t)
            return chars.length
          }
          return v + 1
        })
      }, speedMs)
      return () => clearInterval(t)
    }, startDelayMs)

    return () => clearTimeout(startT)
  }, [chars.length, i, speedMs, startDelayMs, text])

  const shown = chars.slice(0, i).join('')

  return (
    <span className={className}>
      {shown}
      <span className="inline-block w-[0.6ch] animate-pulse align-baseline text-romance-gold">
        |
      </span>
    </span>
  )
}

