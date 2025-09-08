import CustomerHighlights from "@/components/CustomerHighlights";
import HeroSection from "@/components/HeroSection";
import BannerHp from "@/components/BannerHp";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomerHighlights />
      <BannerHp />
      <ImageSlider/>
      <Footer/>
    </>
  );
}
