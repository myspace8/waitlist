import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Web Development',
    description:
      "We don't just teach you to build web apps with HTML, CSS and JavaScript. We push beyond those boundaries and teach the latest, industry-driven web technologies like React, Next.js, Vue.js, firebase.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Python',
    description:
      'From data analysis and machine learning to automation, we cover it all. Our program is designed to equip you with the skills and knowledge needed to tackle real-world problems and build practical solutions using Python.',
    icon: LockClosedIcon,
  },
  {
    name: 'Mobile App Development',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra egetf.',
    icon: ArrowPathIcon,
  },
  // {
  //   name: 'Cybersecurity',
  //   description:
  //     'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
  //   icon: FingerPrintIcon,
  // },
];

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* <p className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </p> */}
              <h1 className="mt-2 text-3xl font-bold text-center md:text-left tracking-tight text-gray-900 sm:text-4xl">
                We teach, train and empower every student to do more with
                computers
              </h1>
              <p className="mt-6 text-lg md:text-xl text-center md:text-left leading-8 text-gray-700">
                Get to know computers as not just a machine for performing
                tasks, but also as a tool for creative expression,
                communication, learning, and innovation.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            width={500}
            height={500}
            src="/images/photo_002.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Discover a new way to learn technology! Our expertly designed
                course programs are tailored to meet your learning needs. From
                beginner to advanced, our courses are carefully crafted to help
                you succeed in your tech journey. Start your learning journey
                with us and unlock your potential!
              </p>
              <div>
                <h1 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Build amazing software applications.
                </h1>
                <p>
                  We will teach you how to{' '}
                  <span className="bg-red-400 px-1 text-white">
                    create your own apps
                  </span>{' '}
                  using the best and latest technologies industries demand.
                </p>
              </div>

              <div className="mx-auto mt-12 max-w-2xl sm:mt-6 lg:mt-8 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x- gap-y-6 lg:max-w-none lg:grid-cols-1 lg:gap-y-12">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        {/* <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div> */}
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
