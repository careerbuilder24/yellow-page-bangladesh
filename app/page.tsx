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

export const metadata = {
  title: "Yellow Pages Bangladesh | Find Businesses & Services",
  description:
    "Discover top businesses, services, and digital marketing solutions in Bangladesh. Explore categories, directories, and trusted companies.",
  keywords: [
    "Bangladesh business directory",
    "Yellow Pages Bangladesh",
    "SEO services Bangladesh",
    "Digital marketing agency",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="hidden">
          Yellow Pages Bangladesh - Business Directory & Digital Services
        </h1>
        <section>
          <Banner />
        </section>
        <section>
          <Directories />
        </section>
        <section>
          <MainCategories />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Products />
        </section>
        <section>
          <FirstPart />
        </section>
        <section>
          <WhyChoseUs />
        </section>
        <section>
          <ReadyToTransform />
        </section>
      </main>

      {/* seo perfect */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Yellow Pages Bangladesh",
            url: "https://yellowpagebangladesh.vercel.app/",
            logo: "https://i.postimg.cc/x8n10xYf/yellow.png",
          }),
        }}
      />
      <Footer />
    </>
  );
}
