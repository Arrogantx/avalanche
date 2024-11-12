import {
  BoltIcon,
  LockClosedIcon,
  ServerIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Blazing Fast',
    description: 'Sub-second finality with high throughput for instant transactions.',
    icon: BoltIcon,
  },
  {
    name: 'Highly Secure',
    description: 'Battle-tested security with proven reliability at scale.',
    icon: LockClosedIcon,
  },
  {
    name: 'Eco-Friendly',
    description: 'Energy-efficient proof-of-stake consensus mechanism.',
    icon: ServerIcon,
  },
  {
    name: 'Developer Ready',
    description: 'Complete Web3 toolkit with extensive documentation and support.',
    icon: CommandLineIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#E84142]">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build on Avalanche
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-[#E84142]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}