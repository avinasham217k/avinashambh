import BackgroundFX from './components/BackgroundFX'
import FinalSection from './sections/FinalSection'
import GallerySection from './sections/GallerySection'
import StorySection from './sections/StorySection'
import WelcomeSection from './sections/WelcomeSection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-romance-bg0 via-romance-bg1 to-romance-bg0">
      <BackgroundFX />

      <header className="sticky top-0 z-10 border-b border-white/5 bg-romance-bg0/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <div className="text-sm font-semibold text-romance-cream">
            Shambhawi <span className="text-romance-pink">❤️</span>
          </div>
          <nav className="flex items-center gap-3 text-xs text-romance-cream/70">
            <a className="hover:text-romance-cream" href="#story">
              Story
            </a>
            <a className="hover:text-romance-cream" href="#gallery">
              Gallery
            </a>
            <a className="hover:text-romance-cream" href="#final">
              Final
            </a>
          </nav>
        </div>
      </header>

      <main>
        <WelcomeSection />
        <StorySection />
        <GallerySection />
        <FinalSection />
      </main>

      <footer className="px-5 pb-10 pt-6 text-center text-xs text-romance-cream/50 sm:px-8">
        <div className="mx-auto max-w-5xl">
          Made for Shambhawi — warm, gentle, and forever.
        </div>
      </footer>
    </div>
  )
}

export default App
