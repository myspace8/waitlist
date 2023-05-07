import Gallery from "../components/cohortPhotos";
import Hero from "../components/hero";
import Subscribe from "../components/subscribe";
import Testimonial from "../components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <CoursesOffered /> */}
      <Testimonial />
      <Gallery />
      <Subscribe />
    </>
  );
}
