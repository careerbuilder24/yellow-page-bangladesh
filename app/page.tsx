import Banner from "./components/Banner/Banner";
import Directories from "./components/Directories/Directories";
import FirstPart from "./components/FirstPart/FirstPart";
import MainCategories from "./components/MainCategories/MainCategories";
import Navbar from "./components/Navbar/Navbar";
import WhyChoseUs from "./components/WhyChoseUs/WhyChoseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Directories />
      <MainCategories />
      <FirstPart />
      <WhyChoseUs />
    </>
  );
}
