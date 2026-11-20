import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import SmoothScroll from '@/components/shared/SmoothScroll';

export default function MainLayout({ children }) {
  return (
    <SmoothScroll>
      <div className="antialiased selection:bg-zinc-800 selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
