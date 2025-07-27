import {star} from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="relative flex justify-center items-center flex-col bg-white 
    dark:bg-[#1A2332] border border-gray-100 dark:border-[#2A3441] shadow-xl 
    dark:shadow-gray-800 hover:shadow-2xl dark:hover:shadow-black transition-all 
    duration-500 py-8 px-6 rounded-3xl hover:scale-105 group">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700/20 dark:to-slate-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Profile image with modern styling */}
      <div className="relative z-10 mb-6">
        <img 
          src={imgURL} 
          alt='customer'
          className="w-[120px] h-[120px] rounded-2xl object-cover ring-4 ring-white shadow-lg"
        />
        {/* Status indicator */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
      </div>

      {/* Quote with modern typography */}
      <div className="relative z-10 mb-6">
        <p className="font-medium text-gray-700 dark:text-gray-400 text-base text-center max-w-xs leading-relaxed italic px-4">
          "{feedback}"
        </p>
      </div>

      {/* Rating with modern design */}
      <div className="relative z-10 mb-4 flex justify-center items-center gap-3 bg-gray-50 dark:bg-[#243041] px-4 py-2 rounded-full">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => {
            const starNumber = i + 1;
            let starOpacity = 'opacity-30'; // Empty star
            
            if (rating >= starNumber) {
              starOpacity = 'opacity-100'; // Full star
            } else if (rating >= starNumber - 0.5) {
              starOpacity = 'opacity-70'; // Half star (you could also use a half-star image here)
            }
            
            return (
              <img
                key={i}
                src={star} 
                alt="rating star" 
                className={`w-4 h-4 ${starOpacity}`}
              />
            );
          })}
        </div>
        <span className='text-sm font-semibold text-gray-700 dark:text-gray-400'>{rating}</span>
      </div>

      {/* Customer name with modern typography */}
      <h3 className='relative z-10 font-bold text-xl text-gray-900  dark:text-gray-200 text-center tracking-tight'>
        {customerName}
      </h3>
      
      {/* Subtle verified badge */}
      <p className="relative z-10 text-xs text-gray-500  dark:text-gray-400 mt-1 font-medium">Verified Customer</p>
    </div>
  )
}

export default ReviewCard