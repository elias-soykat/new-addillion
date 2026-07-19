import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReviewCounter from "@/components/ReviewCounter";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudy from "@/components/CaseStudy";
import Network from "@/components/Network";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ReviewCounter />
      <WhyChooseUs />
      <Services />
      <Process />
      <CaseStudy />
      <Network />
      <Testimonial />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
