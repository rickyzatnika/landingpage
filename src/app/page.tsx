import Slider from "@/components/Slider";
import OurServ from "@/components/OurServ";
import AboutUs from "@/components/AboutUs";
import OurValue from "@/components/OurValue";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      {/*Section 1 - Image Carousel  */}
      <Slider />

      {/*Section 2 - About Us*/}
      <AboutUs />

      {/*Section 3 - Our Services */}
      <OurServ />

      {/* Section 4 - our  value */}
      <OurValue />

      <ContactForm />
    </div>
  );
}
