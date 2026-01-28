import { useMemo } from 'react'

function rand(min, max) {
  return Math.random() * (max - min) + min
}

export default function BackgroundFX() {
  const particles = useMemo(() => {
    const count = 18
    return Array.from({ length: count }).map((_, idx) => {
      const left = rand(0, 100)
      const size = rand(10, 22)
      const dur = rand(6.5, 11.5)
      const delay = rand(0, 8)
      const blur = rand(0, 2.2)
      const opacity = rand(0.18, 0.55)
      const isHeart = Math.random() > 0.35

      return {
        id: `p_${idx}`,
        left,
        size,
        dur,
        delay,
        blur,
        opacity,
        isHeart,
      }
    })
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft romantic glow */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-romance-pink/25 via-romance-purple/15 to-romance-gold/10 blur-3xl" />
      <div className="absolute bottom-[-220px] left-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-romance-purple/20 via-romance-pink/10 to-romance-gold/10 blur-3xl" />

      {/* floating hearts / sparkles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bottom-[-32px] animate-floatUp"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              filter: `blur(${p.blur}px)`,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              ['--dur']: `${p.dur}s`,
            }}
          >
            {p.isHeart ? (
              <div
                className="h-full w-full rotate-45 rounded-[4px] bg-gradient-to-br from-romance-pink/80 to-romance-gold/60 shadow-[0_0_30px_rgba(255,93,162,0.18)]"
                style={{
                  clipPath:
                    'path("M10 18 C 10 18, 2 12, 2 7 C 2 4, 4 2, 7 2 C 9 2, 10 3.5, 10 3.5 C 10 3.5, 11 2, 13 2 C 16 2, 18 4, 18 7 C 18 12, 10 18, 10 18 Z")',
                }}
              />
            ) : (
              <div className="h-full w-full rounded-full bg-gradient-to-br from-romance-gold/70 to-romance-blush/30 shadow-[0_0_40px_rgba(247,211,122,0.14)]" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

