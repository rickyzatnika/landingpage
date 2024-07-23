
import Slider from "@/components/Slider";
import OurServices from "@/components/OurServices";
import AboutUs from "@/components/AboutUs";
import OurValue from "@/components/OurValue";
import ContactForm from "@/components/ContactForm";


export default function Home() {
  return (
    <div>
      
      {/*Section 1 - Image Carousel  */}
      <Slider/>

      {/*Section 2 - Our Services*/}
      <OurServices/>

      {/*Section 3 - About Us */}
      <AboutUs/>

      {/* Section 4 - our  value */}
      <OurValue/>

      <ContactForm/>

    </div>
  );
}
