import { useState } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsubmitted] = useState(false);
  // const [numOfSubscribers, setNumOfSubscribers] = useState(46)

  const subscribersRef = collection(db, 'subscribers');

  const onSubmitMovie = async (e) => {
    e.preventDefault();
    try {
      await addDoc(subscribersRef, {
        email: email,
      });
      setIsubmitted(true);
      // setNumOfSubscribers(numOfSubscribers + 1)
      setEmail('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            {isSubmitted ? (
              <p className="mt-4 text-lg leading-8 text-gray-800">
                Thank you for subscribing.
              </p>
            ) : (
              <div>
                <p className="mt-4 text-lg leading-8 text-gray-800">
                  Passionate people like you receive updates on events, research
                  and projects in their inbox. Subscribe with your email address
                  and be part.
                </p>
                <form
                  className="mt-6 flex max-w-md gap-4"
                  onSubmit={onSubmitMovie}
                >
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-16 flex-auto rounded-md border-0 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-gray-800
                  ring-gray-300 placeholder:text-gray-400  px-3.5 py-2 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            )}
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-gray-800"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-gray-800">
                Weekly articles
              </dt>
              <dd className="mt-2 leading-7 text-gray-800">
                We share tips, best practices, tutorials on a weekly basis. Get
                insightfull knowledge on the latest technologies, important news
                and all.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-gray-800"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-gray-800">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-800">
                We always want to stay relevant to you and therefore we avoid
                spam.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      ></div>
    </div>
  );
}
