const products = [
  {
    id: 1,
    name: 'Basic Tee',
    imageSrc: '/images/photo_001.jpg',
    imageAlt: 'Class session with students and a teacher.',
  },
  // More products...
];

export default function Certification() {
  return (
    <div className="bg-gray-800 mt-10">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A Certificate of Completion
          </h2>
        </div>
        <div className="mt-6">
          <div className="w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[40rem]">
            <img
              src={'/images/bitlabs_cert.png'}
              width={500}
              height={500}
              alt=""
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
