import { useInView } from '../hooks/useInView'

export default function Reveal({
  as: Comp = 'div',
  children,
  className = '',
  delayMs = 0,
}) {
  const { ref, isInView } = useInView()

  return (
    <Comp
      ref={ref}
      className={[
        'will-change-transform will-change-opacity',
        isInView ? 'animate-fadeUp' : 'opacity-0 translate-y-4',
        className,
      ].join(' ')}
      style={isInView ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Comp>
  )
}

