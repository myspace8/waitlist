import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function Faq() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto max-w-2xl sm:text-center mb-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How we work</h2>
          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2> */}
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Application and payment procedures will go here... 
          </p>
        </div>
      {/* <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left  font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                <span>
                  What programming languages will I learn during this training?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-red-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500">
                The specific programming languages that you will learn may vary
                depending on the training program. However, some common
                languages taught in programming training programs include
                Python, JavaScript, Java, C++, and Ruby.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left  font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                <span>
                  Do I need to have prior programming experience to enroll in
                  this training?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-red-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500">
                No. You do not need to have prior programming experience to
                enroll in this training.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left  font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                <span>
                  Will I receive any certification or accreditation after
                  completing the training?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-red-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500">
                Yes. We give every candidate a certificate after the program.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left  font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                <span>
                  What kind of jobs can I get after completing this training?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-red-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500">
                The job opportunities available to you after completing a
                programming training program will depend on a variety of
                factors, including your skills and experience, the job market in
                your area, and the specific program you completed. However, some
                common job titles for graduates of programming training programs
                include software developer, web developer, data analyst, and IT
                specialist.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>  */}
    </div>
  );
}
