const Stats = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Projects Built</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-[#E84142] sm:text-5xl">4,500+</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Transactions/sec</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-[#E84142] sm:text-5xl">1M+</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Total Value Locked</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-[#E84142] sm:text-5xl">$2B+</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Stats