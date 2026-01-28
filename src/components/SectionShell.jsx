export default function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={[
        'relative px-5 py-16 sm:px-8 sm:py-20',
        'scroll-mt-20',
        className,
      ].join(' ')}
    >
      <div className="mx-auto w-full max-w-5xl">
        {(eyebrow || title) && (
          <div className="mb-8">
            {eyebrow && (
              <div className="text-sm font-semibold tracking-wide text-romance-gold/90">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-2 text-2xl font-semibold text-romance-cream sm:text-3xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

