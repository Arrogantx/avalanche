const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <img
            src="/avalanche-logo.png"
            alt="Avalanche"
            className="h-12 w-auto mb-8"
          />
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build Without Limits on Avalanche
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the fastest, most reliable blockchain platform for Web3 applications. 
            With sub-second finality and unmatched security, Avalanche is where innovation happens.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#E84142] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#d13a3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E84142]"
            >
              Get Started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero