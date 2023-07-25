// import Header from '@/components/header';
import Head from 'next/head';
// import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
// import { Input } from "@/components/ui/input"
// import { db } from "@/firebase/config"
// import { collection, addDoc } from "firebase/firestore"

import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmited] = useState(false);

  // const contactRef = collection(db, 'waitlist');

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
            height: '100%',
          }}
        >
          <div
            className="z-50"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              width: '300px',
            }}
          >
            <h1 className="text-sm uppercase font-bld">
              We are building the largest footwear catalog <br /> in Ghana.
            </h1>
            <h1 className="text-xl uppercase font-bold my-2">
              Enjoy 30% discount on your first purchase.
            </h1>

            {!submitted ? (
              <div className="animate-bounce flex justify-center w-full mt-4">
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
                  className="w-full bg-blue-600 text-white p-2 capitalize text-sm font-medium mt-2 "
                >
                  Get early access
                </button>
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
              top: 48,
              left: 0,
              width: '100%',
              height: '1000px',
              background: 'rgba(0, 0, 0, 0.5)',
            }}
          ></div>
        </main>

        {/* <div className="mt-8 py-2 hidden">
            <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-screen bg-transparent rounded-none absolute bottom-0 text-">Explore our products</Button>
          </SheetTrigger>
          <SheetContent side='bottom' className="h-[80vh]">
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="">
                <div className="w-fu fle justify-center">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </div>
              </TabsList>
              <TabsContent value="account"  className="text-black">Make changes to your account here.</TabsContent>
              <TabsContent value="password" className="text-black">Change your password here.</TabsContent>
            </Tabs>
          </SheetContent>
        </Sheet>
        </div> */}
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
