import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private community access',
  'Learn ChatGPT prompt engineering for coding',
  'Guidance in designing a developer portfolio',
  'Certificate of completion',
]

export default function Bootcamp() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl tracking-tight text-gray-900 text-center uppercase sm:text-4xl">Upcoming</h2>
          <div className='border p-4 mt-4 shadow- bg-gray-100 text-center'>
            <p className='mt-4 text-3xl tracking-tight text-gray-900 sm:text-4xl'>4-Week Coding Bootcamp</p>
            <p className='mt-4 text-3xl font-extrabold tracking-lose text-gray-900 sm:text-4xl'>Next.js & Firebase</p>
          </div>
          <p className="mt-6 text-lg text-center leading-8 text-gray-600">
            Aspiring frontend developer? Build fullstack applications with Next.js & Firebase.
          </p>
        </div>
        <div>
          <p className='mt-16 text-3xl text-center mx-auto max-w-2xl lg:text-center font-bold tracking-tight text-gray-900 sm:text-4xl'>Who is this for</p>
          <p className='mt-4 text-lg text-center leading-8 text-gray-600'>People with fundamental experience in HTML, CSS, JavaScript and React.</p>
          <div className="relative rounded-full text-center text-lg lg:w-[450px] m-auto mt-4 px-3 py-1 leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              If you are not familiar with React.{' '}
              <a href="https://react.dev/learn" target='_blank' className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn from here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none font-semibold text-lg leading-6 text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <>
                  <li key={feature} className="flex text-lg gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                  {/* <span className='pl-8'>hello</span> */}
                </>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      <p className='mt-16 text-3xl mx-auto max-w-2xl lg:text-center font-bold tracking-tight text-gray-900 sm:text-4xl'>Why Next.js & Firebase.</p>
      <div className="mx-auto mt-8 max-w-2xl sm:mt-16 lg:mt-18 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative">
                <dt className="text-base  font-semibold leading-7 text-gray-900">
                    Next.js
                </dt>
                <dd className="mt-2 text-base  leading-7 text-gray-600">Used by the world's largest companies such as Nike, Hulu, Netflix, Next.js enables you to create full-stack Web applications by extending the latest React features.</dd>
            </div>
            <div className="relative">
                <dt className="text-base  font-semibold leading-7 text-gray-900">
                    Firebase
                </dt>
                <dd className="mt-2 text-base  leading-7 text-gray-600">Integrate user authentication with email or google account, fetch users data in realtime in your app. Firebase makes it easy for frontend developers to create a backend for whatever app they are building.</dd>
            </div>
            </dl>
        </div>
        <section className="relative isolate overflow-hidden px-6 py-4 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className='mt-12 text-xl mx-auto max-w-2xl text-center lg:text-center font-bold tracking-tight text-gray-900 sm:text-2xl'>Don't build with just React.</p>
        <p className='mt-2 mx-auto max-w-2xl text-base font-semibold leading-7 text-center tracking-tight text-gray-900 sm:text-xl'>The React Core Team says...</p>
        <figure className="mt-2">
          <blockquote className="text-center leading-8 text-gray-900 sm:text-xl sm:leading-9">
            <p className='text-lg text-center leading-8 text-gray-600 sm:text-xl sm:leading-9'>
              “If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community [Next.js]. Frameworks provide features that most apps and sites eventually need, including routing, data fetching, and generating HTML.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="/images/communityicon.png"
              alt=""
            />
            <a target='_blank' href='https://react.dev/learn/start-a-new-react-project' className="mt-4 flex w-min m-auto text-base">
              <div className="font-semibold text-indigo-600">React.dev</div>
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
    <div>
        <p className='mt-16 text-3xl text-center mx-auto max-w-2xl lg:text-center font-bold tracking-tight text-gray-900 sm:text-4xl'>Our Goal & Why</p>
        <p className='mt-4 text-lg text-center leading-8 text-gray-600'>At Bitlabs, we have discovered the enormous exposure to relevant legacy technologies such as Bootstrap, JQuery and PHP in upcoming developers. We are organizing this bootcamp to help these developers strike a balance between these legacy technologies and the powerful modern technologies like Next.js, firebase and even ChatGPT prompt engineering for coding.</p>
        <div className="relative rounded-full text-center text-lg lg:w-[450px] m-auto mt-4 px-3 py-1 leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {' '}
            <a href="https://react.dev/learn" target='_blank' className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Download a pdf of our goals <span aria-hidden="true">⭳</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}