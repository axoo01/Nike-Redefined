import React, { useState } from 'react';
import { services } from "../constants";
import { MobileServiceCard } from '../components';
import { SectionAnimation } from "../components/Animation";

const MobileServices = ({subtext}) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  // Calculate stack positions
  const getStackIndex = (cardIndex) => {
    if (activeCard === null) return cardIndex;
    if (cardIndex === activeCard) return 0;
    if (cardIndex < activeCard) return cardIndex + 1;
    return cardIndex;
  };

  // Adjust translateX to scale toward middle
  const getTranslateX = (cardIndex) => {
    if (activeCard === null) return cardIndex * 8;
    if (cardIndex === activeCard) return 0;
    if (cardIndex < activeCard) return (cardIndex + 1) * 8;
    return -(cardIndex - activeCard + 1) * 8; // Negative for cards after active
  };

  return (
    <div className=" px-4">
      <div className="max-w-md mx-auto pt-6">
        <p className="text-sm text-center font-montserrat text-gray-400 dark:text-light-gray lg:max-w-lg mb-6 animate-pulse">
          Tap to explore how we got your back!
        </p>
      

        {/* Stack container */}
        <div className="relative h-[240px] mb-0">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="absolute inset-x-4 top-0 transition-all duration-1000 ease-out cursor-pointer"
              style={{
                transform: activeCard === index 
                  ? 'translateY(0px) translateX(0px) scale(1.05)'
                  : `translateY(${getStackIndex(index) * 65}px) translateX(${getTranslateX(index)}px) scale(${1 - getStackIndex(index) * 0.04})`,
                zIndex: activeCard === index ? 50 : 30 - getStackIndex(index),
              }}
              onClick={() => handleCardClick(index)}
            >
              <MobileServiceCard
                {...service}
                index={index}
                isActive={activeCard === index}
                handleCardClick={handleCardClick}
              />
            </div>
          ))}
        </div>

        {/* Shoe Icon Progress Indicators */}
        <div className="flex justify-center mt-3 gap-5">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`transition-all duration-300 ${
                activeCard === index 
                  ? 'scale-125 opacity-100 animate-pulse' 
                  : 'scale-100 opacity-60 hover:opacity-80'
              }`}
              aria-label={`Select service ${index + 1}`}
            >
              <img
                src={service.imgURL}
                alt={`Service ${index + 1}`}
                width={20}
                height={20}
                className="relative z-10 bg-black dark:bg-transparent"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileServices;
