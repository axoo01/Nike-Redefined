
import { CustomerReviews, Footer, Hero, PopularProducts, 
  Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import Nav from "./components/Nav";
import { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative">
      <Nav setIsMobileMenuOpen={setIsMobileMenuOpen} />
      
      {/* Content wrapper with push effect */}
      <motion.div
        className={`transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'lg:transform-none shadow-3xl border border-gray-900/50 dark:border-coral-red/90' : ''
        }`}
        animate={{
          x: isMobileMenuOpen ? 260 : 0,
          scale: isMobileMenuOpen ? 0.97 : 1,
          borderRadius: isMobileMenuOpen ? '100px' : '0px',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* Add proper spacing for fixed header */}
        <div className="pt-1">
          <section className="xl:padding-l wide:padding-r padding-b">
            <Hero />
          </section>
          <section className="padding">
            <PopularProducts />
          </section>
          <section className="padding">
            <SuperQuality />
          </section>
          <section className="padding-x py-10">
            <Services />
          </section>
          <section className="padding">
            <SpecialOffer />
          </section>
          <section className="padding bg-pale-blue">
            <CustomerReviews />
          </section>
          <section className="padding sm:py-32 p-16 w-full">
            <Subscribe />
          </section>
          <section className="padding-x padding-t pb-8 bg-black">
            <Footer />
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default App;
