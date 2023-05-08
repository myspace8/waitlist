const products = [
    {
      id: 1,
      name: 'Basic Tee',
      imageSrc: '/images/photo_001.jpg',
      imageAlt: "Class session with students and a teacher.",
    },
    {
      id: 2,
      name: 'Basic Tee',
      imageSrc: 'images/photo_002.jpg',
      imageAlt: "A smiling student in front of a laptop.",
    },
    {
      id: 3,
      name: 'Basic Tee',
      imageSrc: 'images/photo_003.jpg',
      imageAlt: "Most students in one picture",
    },
    {
      id: 4,
      name: 'Basic Tee',
      imageSrc: 'images/photo_004.jpg',
      imageAlt: "Students with their certificate of accomplishment.",
    },
    // More products...
  ]
  
  export default function Gallery() {
    return (
      <div className="bg-gray-800">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <p className="mt-2 text-3xl font-bold text-center tracking-tight text-white sm:text-4xl">
            Photos from previous cohort.
          </p>  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    width={500}
                    height={500}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  