import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsTicker from "@/components/StatsTicker";
import WhyChoose from "@/components/WhyChoose";
import ProgramHighlights from "@/components/ProgramHighlights";
import UniversityOverview from "@/components/UniversityOverview";
import WhoShouldApply from "@/components/WhoShouldApply";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import PlacementSection from "@/components/PlacementSection";
import Testimonials from "@/components/Testimonials";
import FeeStructure from "@/components/FeeStructure";
import AdmissionProcess from "@/components/AdmissionProcess";
import FAQSection from "@/components/FAQSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Courses from "@/components/Courses";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsTicker />
    <WhyChoose />
    <ProgramHighlights />
    <Courses />
    <UniversityOverview />
    <PlacementSection />
    <Testimonials />
    <AdmissionProcess />
    <FAQSection />
    <VideoSection />
    <ContactSection />
    <StickyMobileCTA />
    {/* Removed sections below */}
    {/* <WhoShouldApply /> */}
    {/* <CurriculumRoadmap /> */}
    {/* <FeeStructure /> */}
    {/* <Footer /> */}
  </div>
);

export default Index;
