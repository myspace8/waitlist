// import Header from '@/components/header';
import Head from 'next/head';
// import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
// import { Input } from "@/components/ui/input"
// import { db } from '@/firebase/config';
// import { collection, addDoc } from 'firebase/firestore';

import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmited] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const eventDate = new Date('2023-07-30'); // Replace this with your target date
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    } else {
      setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const contactRef = collection(db, 'waitlist');

  const onSubmitContact = async (e) => {
    e.preventDefault();
    try {
      await addDoc(contactRef, {
        phone: phone,
      });
      if (phone === '') {
        alert('Please enter your phone number');
      } else {
        setPhone(0);
        setSubmited(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Waitlist</title>
        <meta name="description" content="Waitlist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <style>{`body { overflow: hidden; }`}</style> */}
      </Head>
      <>
        <div>{/* <Header /> */}</div>

        <main
          // className={inter.className}
          style={{
            backgroundImage:
              "url('https://images.nationalgeographic.org/image/upload/v1638890315/EducationHub/photos/amazon-river-basin.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <h1 className="text-xs text-gray-400 z-50 absolute top-0 font-bold mt-1 p-1 max-w-[210px]">
            Amazon Rainforest: <br /> Houses around 390 billion individual
            trees, representing over 16,000 different species.
          </h1>
          <div
            className="z-50 w-[300px] md:w-[400px]"
            style={{
              position: 'relative',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <h1 className="text-sm text- border- mb-3  font-bld">
              We are building a platform that houses the largest footwear
              collections in Ghana with everyday offers up to 60% OFF discount
              and a free delivery for early customers.
            </h1>
            {/* <h1 className="text-sm text- border- mb-3  font-bld">
            With unbelievable discount offers up to 60% OFF and a free delivery for early customers
            </h1>
            <h1 className="text-sm text- border-  font-bld">
            You get the chance to buy the shoe you love and cherish and not “mɛfa no saa”</h1> */}

            {!submitted ? (
              <div>
                <div
                  style={{ fontSize: '24px', marginTop: '20px' }}
                  className="flex gap-3 items-center justify-center"
                >
                  <div className="flex gap-1 flex-col items-center">
                    <div className="bg--600 rounded-full w-14 h-14 flex justify-center items-center">
                      {timeLeft.hours}
                    </div>
                    <p className="text-xs">Hours</p>
                  </div>
                  <div className="flex gap-1 flex-col items-center">
                    <div className="bg--600 rounded-full w-14 h-14 flex justify-center items-center">
                      {timeLeft.minutes}
                    </div>
                    <p className="text-xs">Minutes</p>
                  </div>
                  <div className="flex gap-1 flex-col items-center">
                    <div className="bg--600 rounded-full w-14 h-14 flex justify-center items-center">
                      {timeLeft.seconds}
                    </div>
                    <p className="text-xs">Seconds</p>
                  </div>
                </div>
                {/* <div className="animate-bounce flex justify-center w-full mt-4">
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div> */}
              </div>
            ) : (
              <div>🙏😊</div>
            )}

            {!submitted ? (
              <form
                onSubmit={onSubmitContact}
                style={{ marginTop: '30px' }}
                className="flex flex-col gap-1 mt-0"
              >
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="number"
                  placeholder="Enter phone number"
                  className="rounded-none text-white font-medium bg-transparent placeholder:text-slate-300"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 capitalize text-sm font-medium mt-2 "
                >
                  Get early access
                </button>
                {/* <div className='mt-12'>
                  <button className='text-sm underline-offset-4 underline'> 
                  What is 60% OFF discount?
                  </button>
                </div> */}
              </form>
            ) : (
              <div>
                <h2>Thanks for joining!</h2>
              </div>
            )}
          </div>

          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.5)',
            }}
          ></div>
        </main>
      </>
    </>
  );
}

// import Certification from "../components/certification";
// import Gallery from "../components/cohortPhotos";
// import Faq from "../components/faq";
// import Hero from "../components/hero";
// import Subscribe from "../components/subscribe";
// import Testimonial from "../components/testimonials";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Testimonial />
//       <Gallery />
//       <Faq />
//       <Certification />
//       <Subscribe />
//     </>
//   );
// }
