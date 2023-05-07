export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 sm:py-24 border-y lg:px-8">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#FAE2E2" />
            <stop offset={1} stopColor="#CC2020" />
          </radialGradient>
        </defs>
        {/* 7775D6 */}
        {/* E935C1 */}
      </svg>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
        <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
          Testimonial.
        </p>
        <figure className="mt-10">
          <blockquote className="text-center text-lg font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-14 w-14 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center mb-6 lg:mb-0 space-x-3 text-base">
              <div className="font-semibold text-gray-900">Beulah</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Student</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
