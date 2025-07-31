const MobileServiceCard = ({ imgURL, label, subtext, index, isActive, handleCardClick }) => {
  return (
    <div className={`group relative flex-1 sm:w-[280px] sm:min-w-[240px] w-full transition-all duration-700 ease-out cursor-pointer ${isActive ? 'scale-105' : ''}`}>
      {/* Main card */}
      <div className={`relative bg-white dark:bg-[#1A2332] rounded-[20px] shadow-xl  px-4 py-8 border border-gray-100 dark:border-[#2A3441] overflow-hidden transition-all duration-500 ${isActive ? 'hover:shadow-2xl dark:hover:shadow-coral-red/10 ' : ''}`}>
        
        {/* Icon and title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 flex justify-center  items-center bg-coral-red rounded-full shadow-lg transition-all duration-500 ${isActive ? 'scale-125 shadow-coral-red/10' : ''}`}>
              <div className={`absolute inset-0 bg-coral-red rounded-full opacity-0 ${isActive ? 'opacity-50 scale-150 blur-md' : ''} transition-all duration-500`}></div>
              <img 
                src={imgURL} 
                alt={label} 
                width={20} 
                height={20} 
                className={`relative z-10 transition-transform duration-700 ${isActive ? 'rotate-[360deg]' : ''}`} 
              />
            </div>
            <h3 className={`font-palanquin font-bold text-gray-900 dark:text-white ${isActive ? 'text-lg text-coral-red' : 'text-base line-clamp-1'}`}>
              {label}
            </h3>
          </div>
          {/* Close button for active card */}
          {isActive && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(index);
              }}
              className="w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-[#2A3441] rounded-full hover:bg-gray-200 dark:hover:bg-[#3A4451] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-400">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
        
        {/* Description for active card */}
        {isActive && (
          <div className="mt-4">
            <p className="font-montserrat text-sm leading-normal text-slate-gray dark:text-slate-200 transition-all duration-300">
              {subtext}
            </p>
          </div>
        )}
        
        {/* Animated top accent line */}
        <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-coral-red to-orange-500 ${isActive ? 'w-full' : 'w-0'} transition-all duration-700`}></div>
      </div>
    </div>
  );
};

export default MobileServiceCard;
