import { useSwipeable } from "react-swipeable";
import { star } from "../assets/icons";

const MobileReviewCard = ({ imgURL, customerName, rating, feedback, index, onSwipe }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe(index + 1),
    onSwipedRight: () => onSwipe(index - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className={`group absolute flex justify-center items-center flex-col transition-all duration-1000 ease-out cursor-pointer !sm:w-[250px] !sm:min-w-[220px] w-full ${
        index === 0 ? "scale-110 z-50" : "scale-[0.95] z-[30] "
      }`}
      style={{
        transform: `translateX(${index * 260}px)`,
        transition: "transform 1000ms ease-out, 1000ms ease-out",
      }}
    >
      {/* Main card */}
      <div
        className={`relative bg-white dark:bg-[#1A2332] shadow-xl border border-gray-100 dark:border-[#2A3441] rounded-3xl py-6 px-4 w-full !max-w-[250px] overflow-hidden transition-all duration-1000 flex justify-center items-center flex-col`}
      >
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
          className="relative z-10 mb-6  text-slate-gray dark:text-gray-400 text-sm text-center max-w-[200px] leading-relaxed italic"
        >
          "{feedback}"
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
          className="relative z-10 text-xs text-gray-400 dark:text-gray-400 mt-1 font-medium text-center"
        >
          Verified Customer
        </p>
      </div>
    </div>
  );
};

export default MobileReviewCard;
