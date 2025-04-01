
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the target date to 30 days from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Simple animation without cursor tracking
  const astronautStyle = {
    animation: 'floating 5s ease-in-out infinite',
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden mesh-gradient flex items-center">
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="space-y-2">
              <div className="inline-block animate-bounce-gentle">
                <span className="bg-white/90 text-hackathon-pink px-4 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block text-hackathon-blue">SemiColon</span>
                <span className="block text-hackathon-pink wavy-underline">Hackathon</span>
              </h1>
              <p className="text-slate-700 text-lg md:text-xl mt-4">
                Join us for an exciting 36-hour journey of innovation, creativity, and collaboration. Build something amazing with fellow developers!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="sm:flex-1">
                <AnimatedButton 
                  variant="primary" 
                  size="lg"
                  withConfetti
                  className="w-full"
                >
                  Register Now
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 animate-pulse" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </AnimatedButton>
              </Link>
              <AnimatedButton 
                variant="outline" 
                size="lg"
                className="sm:flex-1"
              >
                Learn More
              </AnimatedButton>
            </div>
            
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="glass-card p-2 sm:p-4 rounded-xl text-center hover:transform hover:scale-105 transition-transform duration-300">
                  <div className="text-xl sm:text-3xl font-bold text-hackathon-blue mb-1">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 capitalize">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[500px]">
            {/* Astronaut SVG with simple animation */}
            <div className="absolute inset-0 flex items-center justify-center" style={astronautStyle}>
              <div className="relative w-3/4 h-3/4">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="100" cy="100" r="40" fill="#FFFFFF" stroke="#1A2E5A" strokeWidth="3" />
                  <circle cx="90" cy="90" r="10" fill="#5ECDE3" />
                  <rect x="85" y="140" width="30" height="40" fill="#FFFFFF" stroke="#1A2E5A" strokeWidth="3" />
                  <rect x="70" y="100" width="20" height="40" fill="#FFFFFF" stroke="#1A2E5A" strokeWidth="3" />
                  <rect x="110" y="100" width="20" height="40" fill="#FFFFFF" stroke="#1A2E5A" strokeWidth="3" />
                  <circle cx="80" cy="190" r="10" fill="#FF5B65" />
                  <circle cx="120" cy="190" r="10" fill="#FF5B65" />
                </svg>
                <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-hackathon-yellow rounded-full opacity-30 animate-pulse-glow"></div>
              </div>
            </div>

            {/* Planet */}
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-hackathon-cyan rounded-full opacity-50 animate-bounce-gentle"></div>
            
            {/* Stars */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse-glow"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-hackathon-blue">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;