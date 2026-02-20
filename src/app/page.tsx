import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Consulting from '@/components/consulting/consulting';
import Leads from '@/components/leads/leads';
import Services from '@/components/services/services';
import Work from '@/components/work/work';
import Teams from '@/components/teams/teams';
import Testimonials from '@/components/testimonials/testimonials';
import Questions from '@/components/questions/questions';
import Pricing from '@/components/pricing/pricing';
import Partnership from '@/components/partnership/partnership';
import Article from '@/components/article/article';
import ScrollProgress from '@/components/scrollProgress/scrollProgress';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Consulting />
        <Leads />
        <Services />
        <Work />
        <Teams />
        <Testimonials />
        <Questions />
        <Pricing />
        <Partnership />
        <Article />
      </main>
      <Footer />
      <ScrollProgress />
    </>
  );
}
