import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { AppointmentForm } from './components/AppointmentForm';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <DoctorsSection />
        <AppointmentForm />
        <ReviewsSection />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}