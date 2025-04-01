
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Card3D from './Card3D';

interface Judge {
  name: string;
  role: string;
  company: string;
  imagePlaceholder: string;
  bio: string;
}

const Judges: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  const judges: Judge[] = [
    {
      name: "Alex Johnson",
      role: "CTO",
      company: "TechInnovate",
      imagePlaceholder: "AJ",
      bio: "Alex has over 15 years of experience in the tech industry and has been a judge for numerous hackathons. They specialize in AI and cloud architecture."
    },
    {
      name: "Samantha Park",
      role: "Founder",
      company: "EcoSolutions",
      imagePlaceholder: "SP",
      bio: "Samantha is a serial entrepreneur who has founded three successful startups in the sustainability space. She brings a unique perspective on scalable eco-friendly solutions."
    },
    {
      name: "Michael Chen",
      role: "Lead Engineer",
      company: "BlockchainX",
      imagePlaceholder: "MC",
      bio: "Michael is a blockchain expert who has contributed to several open-source projects. He's passionate about decentralized applications and Web3 technology."
    },
    {
      name: "Olivia Williams",
      role: "Design Director",
      company: "UXMasters",
      imagePlaceholder: "OW",
      bio: "Olivia has designed award-winning user experiences for global brands. She'll be evaluating projects based on their usability and design innovation."
    },
    {
      name: "David Kwame",
      role: "VC Partner",
      company: "Future Fund",
      imagePlaceholder: "DK",
      bio: "David is a venture capitalist specializing in early-stage tech startups. He has a keen eye for identifying solutions with market potential."
    },
    {
      name: "Priya Mehta",
      role: "AI Research Lead",
      company: "DataSense",
      imagePlaceholder: "PM",
      bio: "Priya leads AI research at DataSense and has published numerous papers on machine learning. She'll be looking for technically innovative solutions."
    }
  ];
  
  // Generate a consistent color based on name
  const getColorClass = (name: string) => {
    const colors = [
      "#FF5B65", // pink
      "#5ECDE3", // cyan
      "#FFD100", // yellow
      "#6A7BFF", // blue
      "#FF9F5B"  // orange
    ];
    
    // Simple hash function
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <section id="judges" className="py-20 bg-hackathon-lightblue/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-hackathon-pink/20 text-hackathon-blue font-medium text-sm mb-4">
            Meet The Experts
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="block text-hackathon-blue">Our Distinguished</span>
            <span className="block text-hackathon-pink wavy-underline">Judges & Mentors</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Click on the cards to learn more about our expert judges and mentors who will be evaluating your projects and providing guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <div
              key={index}
              className="h-[300px]"
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              {flippedCard === index ? (
                <Card3D
                  title={judge.name}
                  description={judge.bio}
                  icon={`${judge.role} at ${judge.company}`}
                  color={getColorClass(judge.name)}
                />
              ) : (
                <Card3D
                  title={judge.name}
                  description={`${judge.role} at ${judge.company}`}
                  icon={judge.imagePlaceholder}
                  color={getColorClass(judge.name)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;
