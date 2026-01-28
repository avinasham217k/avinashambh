import Reveal from '../components/Reveal'
import SectionShell from '../components/SectionShell'

// Put your photos in `public/gallery/` with these filenames
// (or update the `src` values below to match your actual paths).
const photos = [
  {
    title: 'Mirror selfie',
    caption: 'That day you looked effortlessly beautiful.',
    src: '/gallery/36358273-5ebf-4a59-8be2-3488b9b8f005-e942a450-7952-4746-a628-cce495879b20.png',
  },
  {
    title: 'Temple glow',
    caption: 'You, saree, and divinity all in one frame.',
    src: '/gallery/5ba2e260-f364-4d2c-9749-1a9c37ffa19a-975e0bdd-c132-45b4-a928-cfab36726871.png',
  },
  {
    title: 'Purple dream',
    caption: 'Like a princess lost in her own thoughts.',
    src: '/gallery/dd4b6b9e-8a81-4805-8cea-c935a67db56a-9a7a3f24-371e-495b-a426-ff0eff79a1ea.png',
  },
  {
    title: 'Red elegance',
    caption: 'Graceful, soft, and so you.',
    src: '/gallery/30c14743-fefd-4753-838c-b9e7eb8f9156-a5c9a6e8-9144-491f-9f79-531cce699768.png',
  },
  {
    title: 'Sunlit yellow',
    caption: 'You brighten every frame you’re in.',
    src: '/gallery/1911a4e7-ba79-48b9-aeb3-c1bf36278465-8c580a62-f80d-4d36-99a5-6eab6a44e027.png',
  },
  {
    title: 'Room full of warmth',
    caption: 'Even the walls look happier with you there.',
    src: '/gallery/7603bfc4-d088-4375-b6a1-8fbb2ca01f45-e04cd6bf-28bb-4698-bf13-3612b1ab1bed.png',
  },
  {
    title: 'Call smiles',
    caption: 'When even pixels can’t hide how cute you are.',
    src: '/gallery/IMG_8332-d8602de8-fc16-42ed-a45b-d1faa3ba5617.png',
  },
  {
    title: 'Candid thoughts',
    caption: 'The way you listen, the way you care.',
    src: '/gallery/IMG_8305-ff063376-ecc0-4a98-9780-dff08d7d7d9c.png',
  },
  {
    title: 'Ice cream moment',
    caption: 'Even a small bite feels special with you.',
    src: '/gallery/IMG_8304-94fef974-b241-45c1-91b3-401305fe487a.png',
  },
  {
    title: 'Late-night talk',
    caption: 'Sleepy eyes, soft voice, endless comfort.',
    src: '/gallery/IMG_8303-a22b1733-3ef9-4179-a5c2-be85d8244acf.png',
  },
]

function PhotoCard({ title, caption, src, delayMs }) {
  return (
    <Reveal delayMs={delayMs} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow backdrop-blur">
        {/* photo */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={src}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-romance-bg1/70 via-transparent to-transparent opacity-90" />
        </div>

        {/* hover caption */}
        <div className="absolute inset-0 flex items-end p-4">
          <div className="w-full translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="rounded-2xl border border-white/10 bg-romance-bg1/70 px-4 py-3 backdrop-blur">
              <div className="text-sm font-semibold text-romance-cream">{title}</div>
              <div className="text-xs text-romance-cream/70">{caption}</div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function GallerySection() {
  return (
    <SectionShell
      id="gallery"
      eyebrow="Gallery"
      title="Our little world, in pictures"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
        {photos.map((p, idx) => (
          <PhotoCard
            key={p.title}
            title={p.title}
            caption={p.caption}
            src={p.src}
            delayMs={idx * 70}
          />
        ))}
      </div>

      <Reveal delayMs={120} className="mt-6">
        <p className="text-sm text-romance-cream/65">Every photo is a little piece of us.</p>
      </Reveal>
    </SectionShell>
  )
}

