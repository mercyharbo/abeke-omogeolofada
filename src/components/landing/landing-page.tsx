import { AboutSection } from './about-section'
import { Footer } from './footer'
import { HeroSection } from './hero-section'
import { Navbar } from './navbar'
import { OrderCTASection } from './order-cta-section'
import { PopularMealsSection } from './popular-meals-section'
import { SocialVideosSection } from './social-videos-section'
import { TestimonialsSection } from './testimonials-section'
import { WhyChooseUsSection } from './why-choose-us-section'

export function LandingPage() {
  return (
    <div className='min-h-screen bg-[#FFF8DF] text-[#0B0B0B]'>
      <Navbar />
      <main>
        <HeroSection />
        <PopularMealsSection />
        <AboutSection />
        <SocialVideosSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <OrderCTASection />
      </main>
      <Footer />
    </div>
  )
}
