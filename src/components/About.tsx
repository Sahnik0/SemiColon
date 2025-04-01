
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Card3D from './Card3D';

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const cards = [
    {
      title: "Innovation",
      description: "Push the boundaries of what's possible with cutting-edge technologies. Build something that hasn't been built before.",
      icon: "💡",
      color: "#FF5B65" // hackathon-pink
    },
    {
      title: "Collaboration",
      description: "Form teams with diverse skills. Collaborate with designers, developers, and problem solvers to create something amazing.",
      icon: "🤝",
      color: "#FFD100" // hackathon-yellow
    },
    {
      title: "Learning",
      description: "Expand your skills through workshops and mentorship. Learn from industry experts and fellow participants.",
      icon: "🧠",
      color: "#5ECDE3" // hackathon-cyan
    },
    {
      title: "Networking",
      description: "Connect with like-minded individuals, sponsors, and potential employers. Build relationships that last beyond the event.",
      icon: "🌐",
      color: "#31A8FF" // hackathon-blue
    }
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-hackathon-lightblue text-hackathon-blue font-medium text-sm mb-4">
            About SemiColon ;
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What makes our hackathon
            <span className="block text-hackathon-pink wavy-underline">Extraordinary</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Hover over the cards below to discover what makes HackX a unique and exciting hackathon experience that you won't want to miss!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="h-full min-h-[280px]"
              onClick={() => handleCardClick(index)}
            >
              <Card3D 
                title={card.title} 
                description={card.description}
                icon={card.icon}
                color={card.color}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-hackathon-lightblue rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-hackathon-cyan opacity-20 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-hackathon-pink opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative">
            <h3 className="text-2xl font-bold text-hackathon-blue mb-4">Ready for the challenge?</h3>
            <p className="text-slate-700 mb-6">
              Our hackathon brings together programmers, designers, and innovators from all backgrounds to create amazing projects in just 48 hours. Whether you're a seasoned hacker or a first-timer, you'll find a welcoming community ready to build the future together.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-hackathon-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">48-hour sprint</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-hackathon-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Amazing prizes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-hackathon-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Free food & swag</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-hackathon-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Expert mentors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
