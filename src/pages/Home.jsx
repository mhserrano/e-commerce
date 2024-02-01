import Hero from "../components/Hero";
import ProudProducts from "../components/ProudProducts";
import Banner from "../components/Banner";
import TrendingSlider from "../components/TrendingSlider";
import BannerReverse from "../components/BannerReverse";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner />
      <TrendingSlider />
      <BannerReverse />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
