import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px', ...options },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}

