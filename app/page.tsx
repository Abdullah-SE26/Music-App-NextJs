import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return (

        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <HeroSection/>
            <FeaturedCourses/>
            <WhyChooseUs/>
            <TestimonialCards/>
            <UpcomingWebinars/>
            <InstructorSection/>
            <Footer/>

        </main>

      
  );
};

export default Home;
