const ServiceCard = ({ imgURL, label, subtext, index, isActive }) => {
  const getCardTransform = () => {
    if (index === 0) return "lg:hover:translate-x-4";
    if (index === 2) return "lg:hover:-translate-x-4";
    return "lg:hover:-translate-y-6";
  };

  return (
    <div className={`group relative flex-1 sm:w-[350px] sm:min-w-[200px] w-full transition-all duration-1000 ease-out cursor-pointer ${isActive ? 'scale-105' : ''} ${getCardTransform()}`}>
      {/* Animated glow background */}
      <div className="absolute -inset-2 bg-gradient-to-r from-coral-red/20 via-orange-400/20 to-coral-red/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      
      {/* Main card */}
      <div className="relative bg-white dark:bg-[#1A2332] rounded-[20px] shadow-3xl dark:shadow-coral-red/5 px-10 py-16 border border-gray-50 dark:border-[#2A3441] overflow-hidden transition-all duration-500 hover:shadow-2xl dark:hover:shadow-coral-red/10">
        
        {/* Icon container */}
        <div className='relative z-10 w-11 h-11 flex justify-center items-center bg-coral-red rounded-full shadow-lg group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-coral-red/30 transition-all duration-500'>
          <div className="absolute inset-0 bg-coral-red rounded-full opacity-0 group-hover:opacity-50 scale-150 group-hover:scale-200 transition-all duration-500 blur-md"></div>
          <img 
            src={imgURL} 
            alt={label} 
            width={24} 
            height={24} 
            className="relative z-10 transition-transform duration-700 group-hover:rotate-[360deg]" 
          />
        </div>
        
        {/* Title */}
        <h3 className='relative z-10 mt-5 font-palanquin text-3xl leading-normal font-bold text-gray-900 dark:text-white group-hover:text-coral-red transition-colors duration-500'>
          {label}
        </h3>
        
        {/* Description */}
        <p className='relative z-10 mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray dark:text-slate-300 group-hover:text-gray-600 dark:group-hover:text-slate-200 transition-all duration-300'>
          {subtext}
        </p>
        
        {/* Animated top accent line */}
        <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-coral-red to-orange-500 group-hover:w-full transition-all duration-700 delay-200"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
