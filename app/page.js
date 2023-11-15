import Hero from '@/components/Hero'
import FeaturedServices from '@/components/FeaturedServices'
import ValueProposition from '@/components/ValueProposition'
import Stats from '@/components/Stats'
import DiscountBanner from '@/components/DiscountBanner'
import Content from '@/components/Content'
import HomeReviews from '@/components/HomeReviews'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <>
    <Hero />
    <FeaturedServices />
    <ValueProposition />
    <Stats />
    <DiscountBanner />
    <Content />
    <HomeReviews />
    </>
  )
}
