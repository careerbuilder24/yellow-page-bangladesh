import Banner from "./components/Banner/Banner";
import MainCategories from "./components/MainCategories/MainCategories";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <MainCategories/>
    </>
  );
}
