import Reveal from '../components/Reveal'
import SectionShell from '../components/SectionShell'

export default function WelcomeSection() {
  return (
    <SectionShell
      id="welcome"
      className="min-h-[92vh] flex items-center"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <Reveal>
            <h1 className="text-4xl font-semibold leading-tight text-romance-cream sm:text-5xl">
              Hi Shambhawi <span className="text-romance-pink">❤️</span>
            </h1>
          </Reveal>

          <Reveal delayMs={120}>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-romance-cream/80 sm:text-lg">
              A tiny little page, made with a lot of love—just for you.
            </p>
          </Reveal>

          <Reveal delayMs={220}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() =>
                  document.getElementById('story')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }
                className={[
                  'inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold',
                  'bg-gradient-to-r from-romance-pink via-romance-purple to-romance-gold',
                  'text-romance-bg0 shadow-glow',
                  'transition-transform hover:scale-[1.02] active:scale-[0.99]',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-romance-gold/60',
                ].join(' ')}
              >
                Tap to begin
              </button>

              <div className="text-sm text-romance-cream/60">
                (Scroll gently — there are surprises.)
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={140}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-romance-pink/20 via-romance-purple/10 to-romance-gold/10 blur-xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-romance-gold/90">
                  For Shambhawi
                </div>
                <div className="text-xs text-romance-cream/60">a little love note</div>
              </div>
              <div className="mt-5 space-y-3 text-romance-cream/80">
                <p className="leading-relaxed">
                  If you ever wonder what you mean to me—
                  here’s a small piece of my heart, in pixels.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <p className="leading-relaxed">
                  Pink, purple, and soft gold… because you make everything feel warm.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}

