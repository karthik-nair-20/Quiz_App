export default function Header() {
  return (
    <section className="bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Pub Quiz: <br />Knowledge Unleashed.</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dtext-gray-400">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-xl">🌐</span>
                <span>Unlimited Categories: From history and science to pop culture and sports</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">🎲</span>
                <span>Dynamically Generated Questions: Powered by Open Trivia DB's extensive database</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">🏆</span>
                <span>Multiple Difficulty Levels: Challenge yourself from beginner to expert</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">📊</span>
                <span>Real-time Scoring: Track your progress and compete with friends</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">🌈</span>
                <span>Diverse Question Types: Multiple choice, true/false, and more</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">📱</span>
                <span>Seamless Cross-Platform Play: Enjoy on any device, anywhere</span>
              </div>
            </div>
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  )
}