import { db } from '../config/firebase'
import { collection, addDoc } from "firebase/firestore"
import { useState } from 'react';

export default function Contact() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0)
  const [message, setMessage] = useState('')

  const contactRef = collection(db, 'contact')

  const onSubmitContact = async (e) => {
    e.preventDefault();
    try {
      await addDoc(contactRef, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message,
      })
      setFirstname('')
      setLastname('')
      setEmail('')
      setPhone(0)
      setMessage('')
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Are you the head of an educational institution or an individual. Please submit your information below and ask any question you may have in the message box.
        </p>
      </div>
      <form
        onSubmit={onSubmitContact}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-gray-800
                ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-gray-800
                ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-gray-800
                 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-gray-800
                ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm 
                ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-gray-800
                ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-red-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
