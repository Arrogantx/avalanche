interface CTAProps {
  onSignUp: () => void;
}

export default function CTA({ onSignUp }: CTAProps) {
  return (
    <div className="bg-[#E84142]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start building?
            <br />
            Join the Avalanche ecosystem today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-red-100">
            Get access to developer resources, documentation, and community support to build your next big idea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={onSignUp}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#E84142] shadow-sm hover:bg-red-50"
            >
              Sign up for updates
            </button>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}