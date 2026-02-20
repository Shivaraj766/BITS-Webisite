import Hero from "@/components/home/Hero";
import QuickLinks from "@/components/home/QuickLinks";
import Stats from "@/components/home/Stats";
import NewsAnnouncements from "@/components/home/NewsAnnouncements";
import Programs from "@/components/home/Programs";
import WhyBITS from "@/components/home/WhyBITS";
import Accreditation from "@/components/home/Accreditation";
import Events from "@/components/home/Events";
import PlacementsHighlight from "@/components/home/PlacementsHighlight";
import Testimonials from "@/components/home/Testimonials";
import CampusGallery from "@/components/home/CampusGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <Stats />
      <Programs />
      <WhyBITS />
      <NewsAnnouncements />
      <PlacementsHighlight />
      <Testimonials />
      <CampusGallery />
      <Events />
      <Accreditation />
    </>
  );
}
