import { useState, useEffect } from "react";
import { reviews } from "../constants";
import { ReviewCard, MobileReviewCard } from "../components";
import { SectionAnimation } from "../components";

const CustomerReviews = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1); // Start on middle card

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSwipe = (index) => {
    if (index >= 0 && index < reviews.length) {
      setActiveIndex(index); // Sync activeIndex with swipe
    }
  };

  return (
    <SectionAnimation>
      {isMobile ? (
        <section className="max-container p-4">
          <h3 className="font-palanquin text-4xl font-bold">
            What Our <span className="text-coral-red">Customers </span>Say?
          </h3>
          <p className="info-text m-auto mt-4 max-w-lg text-base">
            Hear genuine stories from our satisfied customers about their exceptional experiences with us.
          </p>
          <p className="font-montserrat text-sm text-coral-red text-center mt-4 animate-pulse">
            ← Don't take our word for it - swipe theirs →
          </p>
          <div className="relative h-[380px] mt-4 overflow-hidden">
            {reviews.map((review, index) => (
              <MobileReviewCard
                key={review.customerName}
                {...review}
                index={index - activeIndex}
                onSwipe={setActiveIndex}
              />
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 bg-coral-red rounded-full ${
                  index === activeIndex ? "opacity-100" : "opacity-50"
                } hover:opacity-100 transition-opacity duration-1000`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Select review ${index + 1}`}
              ></button>
            ))}
          </div>
        </section>
      ) : (
        <section className="max-container">
          <h3 className="font-palanquin text-center text-4xl font-bold">
            What Our <span className="text-coral-red">Customers </span>Say?
          </h3>
          <p className="info-text m-auto mt-4 max-w-lg text-center">
            Hear genuine stories from our satisfied customers about their exceptional experiences with us.
          </p>
          <div className="mt-[4rem] flex flex-1 justify-evenly items-center max-lg:flex-col gap-10">
            {reviews.map((review) => (
              <ReviewCard
                key={review.customerName}
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              />
            ))}
          </div>
        </section>
      )}
    </SectionAnimation>
  );
};

export default CustomerReviews;
