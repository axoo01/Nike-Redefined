import { services } from "../constants";
import { ServiceCard } from "../components";
import { SectionAnimation } from "../components";
import { useState, useEffect } from "react";
import MobileServices  from "./MobileServices";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 645);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <SectionAnimation>
      {isMobile ? (
        <MobileServices />
      ) : (
        <section className="max-container max-sm:mt-12">
          <div className="flex flex-col justify-start gap-5 px-4">
          </div>
          <div className="mt-16 flex justify-center flex-wrap gap-9">
            {services.map((service) => (
              <ServiceCard key={service.label} {...service} />
            ))}
          </div>
        </section>
      )}
    </SectionAnimation>
  );
};

export default Services;
