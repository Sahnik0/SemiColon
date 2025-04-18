
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Track {
  title: string;
  description: string;
  icon: string;
  color: string;
  prizes: string[];
}

const Tracks: React.FC = () => {
  const [expandedTrack, setExpandedTrack] = useState<number | null>(null);
  
  const tracks: Track[] = [
    {
      title: "AI & Machine Learning",
      description: "Create innovative applications using artificial intelligence and machine learning algorithms to solve real-world problems.",
      icon: "🤖",
      color: "bg-hackathon-blue",
      prizes: ["$2,000 Cash Prize", "AI Computing Credits", "Mentorship Opportunity"]
    },
    {
      title: "Web3 & Blockchain",
      description: "Build decentralized applications, smart contracts, or blockchain-based solutions that demonstrate the potential of Web3 technologies.",
      icon: "⛓️",
      color: "bg-hackathon-pink",
      prizes: ["$1,800 Cash Prize", "Blockchain Developer Kit", "Incubator Interview"]
    },
    {
      title: "Health & Wellness",
      description: "Develop solutions that address health challenges, improve wellness, or make healthcare more accessible and efficient for everyone.",
      icon: "💊",
      color: "bg-hackathon-cyan",
      prizes: ["$1,500 Cash Prize", "Health Tech Conference Tickets", "Pilot Program Opportunity"]
    },
    {
      title: "Sustainability",
      description: "Create projects that tackle environmental challenges, promote sustainable practices, or help communities adapt to climate change.",
      icon: "🌱",
      color: "bg-hackathon-yellow",
      prizes: ["$1,500 Cash Prize", "Sustainable Tech Grant", "Partnership Opportunity"]
    },
    {
      title: "Education",
      description: "Build tools that enhance learning experiences, make education more accessible, or help educators deliver content more effectively.",
      icon: "📚",
      color: "bg-hackathon-orange",
      prizes: ["$1,200 Cash Prize", "EdTech Summit Passes", "Pilot with School Districts"]
    },
    {
      title: "Open Innovation",
      description: "Don't see a track that fits your idea? This category is for all the creative solutions that don't fit neatly into the other tracks.",
      icon: "💡",
      color: "bg-hackathon-blue",
      prizes: ["$1,000 Cash Prize", "Innovation Lab Tour", "Investor Pitch Session"]
    }
  ];

  const handleTrackClick = (index: number) => {
    setExpandedTrack(expandedTrack === index ? null : index);
  };

  return (
    <section id="tracks" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-hackathon-yellow/20 text-hackathon-blue font-medium text-sm mb-4">
            Challenge Tracks
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="block text-hackathon-blue">Hack on these</span>
            <span className="block text-hackathon-pink wavy-underline">Exciting Tracks</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Choose from one of our themed tracks to focus your project. Each track comes with specific challenges, resources, and prize opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group bg-white border border-gray-100",
                "hover:shadow-lg hover:-translate-y-1 hover:border-transparent",
                expandedTrack === index ? "shadow-xl scale-[1.02]" : ""
              )}
              onClick={() => handleTrackClick(index)}
            >
              <div className={cn(
                "h-2 w-full",
                track.color
              )}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4",
                    track.color + "/10"
                  )}>
                    {track.icon}
                  </div>
                  <h3 className="text-xl font-bold text-hackathon-blue">{track.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-4">{track.description}</p>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedTrack === index ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
                )}>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-bold text-hackathon-pink mb-2">Prizes:</h4>
                    <ul className="space-y-2">
                      {track.prizes.map((prize, prizeIndex) => (
                        <li key={prizeIndex} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hackathon-yellow mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{prize}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center text-hackathon-pink">
                  <span className="mr-2 text-sm font-medium">
                    {expandedTrack === index ? "Show less" : "View prizes"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      expandedTrack === index ? "rotate-180" : ""
                    )}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
