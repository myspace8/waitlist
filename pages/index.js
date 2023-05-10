import Certification from "../components/certification";
import Gallery from "../components/cohortPhotos";
import Faq from "../components/faq";
import Hero from "../components/hero";
import Subscribe from "../components/subscribe";
import Testimonial from "../components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Gallery />
      <Faq />
      <Certification />
      <Subscribe />
    </>
  );
}
