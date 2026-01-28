import Reveal from '../components/Reveal'
import SectionShell from '../components/SectionShell'

const cards = [
  {
    title: '💞 HOW WE MET',
    text: `We met over LinkedIn, but destiny had already written our story.
Durga Puja ke time se I knew of you —
Bhabhi used to talk about your generosity,
your calm nature, your innocent smile,
and how soft-spoken your heart is.
Then one day, LinkedIn became more than just a platform —
it became the place where our story truly began.
From simple conversations to endless thoughts about you,
I didn’t realize when a professional “hello”
turned into a personal “tum bahut special ho.”
It felt like the universe was whispering,
“Ab mil chuke ho, ab judna baaki hai.”`,
  },
  {
    title: '❤️ WHY I LOVE YOU',
    text: `I love you because you are simple,
yet your presence makes life extraordinary.
Tumhara calm nature meri chaos ko shaant kar deta hai.
Your words feel like home,
and your smile feels like a blessing.
In this fast, selfish world,
your heart is still pure, caring, and real.
You don’t try to impress —
you just exist, and that itself is enough.
Mujhe tumse pyaar hai
because you make me believe
that love can be gentle,
love can be respectful,
and love can be forever.`,
  },
  {
    title: 'What you mean to me',
    text: `You are my peace in the middle of noise,
my comfort after a long day,
and the feeling that everything will be okay.
With you, I feel seen, understood, and valued —
not for what I do, but for who I am.
You are not just a part of my life…
you feel like the best part of it.`,
  },
  {
    title: '💍 OUR FUTURE',
    text: `I see our future with your hand in my hand,
walking through life with family’s blessings
and hearts full of love.
I don’t just want moments with you —
I want a lifetime.
I want to see you as my wifey,
my partner, my best friend,
and my biggest strength.
With you, I imagine a home full of laughter,
support from our families,
and a bond that grows stronger every day.
Tum mere saath ho,
toh “forever” scary nahi lagta…
forever feels beautiful.
Forever feels like you.`,
  },
]

function StoryCard({ title, text, delayMs }) {
  return (
    <Reveal delayMs={delayMs} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -inset-24 bg-gradient-to-br from-romance-pink/20 via-romance-purple/10 to-romance-gold/10 blur-2xl" />
          <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-romance-gold/60 to-transparent" />
        </div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-romance-gold/90">
            <span className="h-1.5 w-1.5 rounded-full bg-romance-pink/90" />
            story
          </div>
          <h3 className="mt-4 text-xl font-semibold text-romance-cream">{title}</h3>
          <p className="mt-3 whitespace-pre-line leading-relaxed text-romance-cream/75">
            {text}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default function StorySection() {
  return (
    <SectionShell
      id="story"
      eyebrow="Our little story"
      title="Four small chapters"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((c, idx) => (
          <StoryCard
            key={c.title}
            title={c.title}
            text={c.text}
            delayMs={idx * 90}
          />
        ))}
      </div>
    </SectionShell>
  )
}

