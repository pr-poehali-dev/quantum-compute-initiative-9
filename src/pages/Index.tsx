import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TariffsSection from "@/components/MenuSection";
import ZonesSection from "@/components/AboutSection";
import TournamentsSection from "@/components/AtmosphereSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TariffsSection />
      <ZonesSection />
      <TournamentsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
