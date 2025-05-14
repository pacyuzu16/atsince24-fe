import HeroCarousel from "@/components/hero-carousel"
import FeaturedProducts from "@/components/featured-products"
import WhyChooseUs from "@/components/why-choose-us"
import Cta from "@/components/cta"
import Testimonials from "@/components/testimonials"
import InstallationServices from "@/components/installation-services"

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Cta/>
      <FeaturedProducts />
      <InstallationServices />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}
