import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Consulting from '@/components/consulting/consulting';
import Leads from '@/components/leads/leads';
import Services from '@/components/services/services';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Consulting />
        <Leads />
        <Services />
      </main>
      <Footer />
    </>
  );
}
