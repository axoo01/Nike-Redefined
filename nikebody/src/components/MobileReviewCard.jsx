import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { star } from "../assets/icons";

const MobileReviewCard = ({ imgURL, customerName, rating, feedback, index, onSwipe }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  useEffect(() => {
    console.log("card index:", index); // Debug
  }, [index]);

  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe(index + 1),
    onSwipedRight: () => onSwipe(index - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 10, // Ensure swipe sensitivity
  });

  return (
    <div
      {...handlers}
      className={`group absolute flex justify-center items-center flex-col transition-all duration-1000 ease-out cursor-pointer !sm:w-[250px] !sm:min-w-[220px] w-full ${
        index === 0 || isActive ? "scale-110 z-50 shadow-2xl dark:shadow-black" : "scale-[0.95] z-[30] shadow-md"
      }`}
      style={{
        transform: `translateX(${index * 260}px)`,
        boxShadow: index === 0 || isActive ? "0 4px 12px rgba(0, 0, 0, 0.2)" : "0 2px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 1000ms ease-out, box-shadow 1000ms ease-out",
      }}
      onClick={handleCardClick}
    >
      {/* Main card */}
      <div
        className={`relative bg-white dark:bg-[#1A2332] border border-gray-100 dark:border-[#2A3441] rounded-3xl py-6 px-4 w-full !max-w-[250px] overflow-hidden transition-all duration-1000 flex justify-center items-center flex-col`}
      >
        {/* Close button for active card */}
        {isActive && (
          <button
            onClick={handleCardClick}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-coral-red rounded-full hover:bg-coral-red/80 transition-colors duration-1000"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}

        {/* Profile image */}
        <div className="relative z-10 mb-6">
          <img
            src={imgURL}
            alt={customerName}
            className="w-[80px] h-[80px] rounded-2xl object-cover ring-4 ring-white shadow-lg"
          />
          <div
            className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
          ></div>
        </div>

        {/* Quote */}
        <p
          className="relative z-10 mb-6 font-medium text-gray-700 dark:text-gray-400 text-sm text-center max-w-[200px] leading-relaxed italic"
        >
          {feedback}
        </p>

        {/* Rating */}
        <div
          className="relative z-10 mb-4 flex justify-center items-center gap-1 bg-gray-50 dark:bg-[#243041] px-3 py-1 rounded-full"
        >
          {[...Array(5)].map((_, i) => {
            const starNumber = i + 1;
            let starOpacity = "opacity-30";
            if (rating >= starNumber) {
              starOpacity = "opacity-100";
            } else if (rating >= starNumber - 0.5) {
              starOpacity = "opacity-70";
            }
            return (
              <img
                key={i}
                src={star}
                alt="rating star"
                className={`w-3 h-3 ${starOpacity}`}
              />
            );
          })}
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-400">
            {rating}
          </span>
        </div>

        {/* Customer name */}
        <h3
          className="relative z-10 font-bold text-base text-gray-900 dark:text-gray-200 text-center tracking-tight"
        >
          {customerName}
        </h3>

        {/* Verified badge */}
        <p
          className="relative z-10 text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium text-center"
        >
          Verified Customer
        </p>
      </div>
    </div>
  );
};

export default MobileReviewCard;
