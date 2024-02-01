import Hero from "../components/Hero";
import ProudProducts from "../components/ProudProducts";
import Banner from "../components/Banner";
import TrendingSlider from "../components/TrendingSlider";
import BannerReverse from "../components/BannerReverse";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import banner1 from "../img/banners/banner1.jpg";
import banner2 from "../img/banners/banner2.jpg";
function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Creative harmonious living"
        text=" Our Products are all made to standard sizes so that you can mix and match them freely."
        img={banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text=" Our Products are all made to standard sizes so that you can mix and match them freely."
        img={banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
