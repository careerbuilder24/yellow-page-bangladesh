import Banner from "./components/Banner/Banner";
import Directories from "./components/Directories/Directories";
import FirstPart from "./components/FirstPart/FirstPart";
import Footer from "./components/Footer/Footer";
import MainCategories from "./components/MainCategories/MainCategories";
import Navbar from "./components/Navbar/Navbar";
import ReadyToTransform from "./components/ReadyToTransform/ReadyToTransform";
import Services from "./components/Services/Services";
import WhyChoseUs from "./components/WhyChoseUs/WhyChoseUs";
import Products from "./Products/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Directories />
      <MainCategories />
      <Services />
      <Products />
      <FirstPart />
      <WhyChoseUs />
      <ReadyToTransform />
      <Footer />
    </>
  );
}
