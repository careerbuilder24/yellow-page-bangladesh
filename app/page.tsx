import Banner from "./components/Banner/Banner";
import Directories from "./components/Directories/Directories";
import FirstPart from "./components/FirstPart/FirstPart";
import MainCategories from "./components/MainCategories/MainCategories";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Directories/>
      <MainCategories/>
      <FirstPart/>
    </>
  );
}
