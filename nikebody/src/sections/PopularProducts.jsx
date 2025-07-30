import React, { useState, useRef, useEffect } from 'react';
import { products } from "../constants";
import { star } from '../assets/icons';
import { SectionAnimation } from "../components/Animation";

const PopularProductCard = ({ imgURL, name, price, isActive }) => {
  return (
    <div className={`flex flex-1 flex-col w-full transition-all duration-300 max-sm:py-5 ${
      isActive ? 'scale-105 opacity-100' : 'scale-95 opacity-70'
    }`}>
      <div className="relative overflow-hidden rounded-2xl hover:scale-95 transition-transform duration-1000">
        <img 
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img 
          src={star} 
          alt="rating" 
          width={24}
          height={24}
        />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 font-palanquin font-semibold text-2xl leading-normal'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red'>{price}</p>
    </div>
  )
};

const PopularProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch handlers
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isMobile) return;
    
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging || !isMobile) return;
    
    setIsDragging(false);
    
    const threshold = 50;
    
    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -threshold && currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    
    setTranslateX(0);
  };

  // Mouse handlers for desktop testing
  const handleMouseDown = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isMobile) return;
    
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging || !isMobile) return;
    
    setIsDragging(false);
    
    const threshold = 50;
    
    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -threshold && currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    
    setTranslateX(0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SectionAnimation>
      <section id="products" className='max-container max-sm:mt-12'>
        <div className='flex flex-col justify-start gap-5'> 
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="mt-10 hidden sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-14">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} isActive={true} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="mt-16 sm:hidden">
          <div 
            ref={containerRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="flex transition-transform duration-1000 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * 70}% + ${translateX}px))`
              }}
            >
              {products.map((product, index) => (
                <div 
                  key={product.name} 
                  className="min-w-[75%] px-2 flex justify-center"
                >
                  <PopularProductCard 
                    {...product} 
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-1 gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-coral-red shadow-lg' 
                    : 'w-3 h-3 bg-slate-gray hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          {currentIndex === 0 && (
            <div className="flex justify-center mt-4 opacity-60">
              <p className="text-sm text-slate-gray font-montserrat animate-pulse">
                ← Swipe to explore more products →
              </p>
            </div>
          )}
        </div>
      </section>
    </SectionAnimation>
  )
}

export default PopularProducts;