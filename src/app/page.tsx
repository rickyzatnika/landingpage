
import Slider from "@/components/Slider";
import OurServices from "@/components/OurServices";
import AboutUs from "@/components/AboutUs";


export default function Home() {
  return (
    <div>
      
      {/*Section 1 - Image Carousel  */}
      <Slider/>

      {/*Section 2 - Our Services*/}
      <OurServices/>

      {/*Section 3 - About Us */}
      <AboutUs/>
    </div>
  );
}
