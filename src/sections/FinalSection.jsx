import Reveal from '../components/Reveal'
import SectionShell from '../components/SectionShell'
import Typewriter from '../components/Typewriter'

export default function FinalSection() {
  return (
    <SectionShell id="final" eyebrow="One last thing" title="A promise">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur sm:p-10">
        <div className="absolute -inset-16 bg-gradient-to-br from-romance-pink/20 via-romance-purple/10 to-romance-gold/10 blur-2xl" />

        <Reveal className="relative">
          <div className="text-sm font-semibold tracking-wide text-romance-gold/90">
            for you, always
          </div>
          <div className="mt-4 text-2xl font-semibold leading-snug text-romance-cream sm:text-3xl">
            <Typewriter
              className="whitespace-pre-line"
              text={'Shambhawi, you are my forever.\nशांभवी - I promise I will always love you till my last breath.'}
            />
          </div>
          <p className="mt-5 max-w-prose text-sm leading-relaxed text-romance-cream/70 sm:text-base">
            If you’re reading this, it means you reached the end… but I hope it feels like the
            beginning of many beautiful chapters.
          </p>
        </Reveal>

        <Reveal delayMs={180} className="relative mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() =>
                document.getElementById('welcome')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-romance-cream/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-romance-gold/60"
            >
              Read it again
            </button>

            <div className="text-xs text-romance-cream/60">
              Made with love — and a little bit of Tailwind.
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}

