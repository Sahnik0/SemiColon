
import React, { useState, useEffect, useRef } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  }
};

type TeamCategory = {
  id: string;
  label: string;
  members: TeamMember[];
};

const Team = () => {
  const [activeCategory, setActiveCategory] = useState<string>("organizers");
  const teamRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for team members when they come into view
    const animateTeamMembers = () => {
      const teamCards = document.querySelectorAll('.team-member-card');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Apply staggered animation
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      teamCards.forEach(card => {
        observer.observe(card);
      });
      
      return () => {
        teamCards.forEach(card => {
          observer.unobserve(card);
        });
      };
    };
    
    animateTeamMembers();
    
    // Re-animate when tab changes
    const tabs = document.querySelectorAll('[role="tab"]');
    tabs.forEach(tab => {
      tab.addEventListener('click', animateTeamMembers);
    });
    
    return () => {
      tabs.forEach(tab => {
        tab.removeEventListener('click', animateTeamMembers);
      });
    };
  }, [activeCategory]);
  
  const teamCategories: TeamCategory[] = [
    {
      id: "organizers",
      label: "Organizers",
      members: [
        {
          name: "Alex Chen",
          role: "Lead Organizer",
          bio: "Tech enthusiast with 5+ years of event management experience",
          image: "/placeholder.svg",
          socials: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          }
        },
        {
          name: "Samira Khan",
          role: "Program Director",
          bio: "Former hackathon champion turned community leader",
          image: "/placeholder.svg",
          socials: {
            twitter: "#",
            linkedin: "#"
          }
        },
        {
          name: "Marcus Johnson",
          role: "Operations Manager",
          bio: "Logistics expert making sure everything runs smoothly",
          image: "/placeholder.svg",
          socials: {
            linkedin: "#",
            github: "#"
          }
        },
        {
          name: "Leila Wong",
          role: "Community Manager",
          bio: "Passionate about building inclusive tech communities",
          image: "/placeholder.svg",
          socials: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          }
        }
      ]
    },
    {
      id: "tech",
      label: "Tech Team",
      members: [
        {
          name: "David Park",
          role: "Technical Lead",
          bio: "Full-stack developer and cloud architecture expert",
          image: "/placeholder.svg",
          socials: {
            github: "#",
            linkedin: "#"
          }
        },
        {
          name: "Aisha Patel",
          role: "DevOps Engineer",
          bio: "Infrastructure specialist ensuring smooth deployment",
          image: "/placeholder.svg",
          socials: {
            github: "#",
            twitter: "#"
          }
        },
        {
          name: "Carlos Rodriguez",
          role: "Frontend Engineer",
          bio: "UI/UX specialist with an eye for detail",
          image: "/placeholder.svg",
          socials: {
            github: "#",
            linkedin: "#"
          }
        }
      ]
    },
    {
      id: "management",
      label: "Management",
      members: [
        {
          name: "Grace Liu",
          role: "Executive Director",
          bio: "Visionary leader with experience in tech innovation",
          image: "/placeholder.svg",
          socials: {
            linkedin: "#",
            twitter: "#"
          }
        },
        {
          name: "Omar Hassan",
          role: "Partnerships Manager",
          bio: "Building relationships with sponsors and community partners",
          image: "/placeholder.svg",
          socials: {
            linkedin: "#"
          }
        }
      ]
    },
    {
      id: "sponsors",
      label: "Sponsors",
      members: [
        {
          name: "Julia Martinez",
          role: "Lead Sponsor Liaison",
          bio: "Connecting teams with resources and mentorship",
          image: "/placeholder.svg",
          socials: {
            linkedin: "#",
            twitter: "#"
          }
        },
        {
          name: "Raj Patel",
          role: "Industry Mentor",
          bio: "Helping teams refine their projects for real-world impact",
          image: "/placeholder.svg",
          socials: {
            linkedin: "#",
            github: "#"
          }
        },
        {
          name: "Sophia Kim",
          role: "Technical Mentor",
          bio: "AI specialist offering guidance on cutting-edge technology",
          image: "/placeholder.svg",
          socials: {
            github: "#",
            twitter: "#"
          }
        }
      ]
    }
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="team" ref={teamRef} className="py-20 bg-gradient-to-b from-hackathon-lightblue/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hackathon-blue relative inline-block group">
            Meet the <span className="text-hackathon-pink">Team</span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-hackathon-blue via-hackathon-pink to-hackathon-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The passionate people behind SemiColon who are working hard to create an amazing hackathon experience for you.
          </p>
        </div>

        <Tabs defaultValue="organizers" className="w-full" onValueChange={handleCategoryChange}>
          <div className="flex justify-center mb-12 transition-all duration-500 hover:transform hover:scale-105">
            <TabsList className="bg-hackathon-lightblue/30 p-1 rounded-full">
              {teamCategories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "rounded-full px-6 py-2 transition-all duration-300",
                    "data-[state=active]:bg-white data-[state=active]:shadow-sm",
                    "data-[state=active]:text-hackathon-blue"
                  )}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {teamCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.members.map((member, idx) => (
                  <Card 
                    key={idx} 
                    className="team-member-card overflow-hidden group hover:shadow-lg transition-all duration-500 border-hackathon-lightblue/30 opacity-0 translate-y-10"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <Avatar className="w-full h-full rounded-none">
                            <AvatarImage src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <AvatarFallback className="w-full h-full text-3xl bg-hackathon-blue text-white">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="p-4 w-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex justify-center space-x-3 mb-2">
                              {member.socials.twitter && (
                                <a href={member.socials.twitter} className="text-white hover:text-hackathon-yellow transform hover:scale-125 transition-all duration-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                  </svg>
                                </a>
                              )}
                              {member.socials.linkedin && (
                                <a href={member.socials.linkedin} className="text-white hover:text-hackathon-yellow transform hover:scale-125 transition-all duration-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                  </svg>
                                </a>
                              )}
                              {member.socials.github && (
                                <a href={member.socials.github} className="text-white hover:text-hackathon-yellow transform hover:scale-125 transition-all duration-300">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-hackathon-blue group-hover:text-hackathon-pink transition-colors duration-300">{member.name}</h3>
                        <p className="text-hackathon-pink font-medium mb-2">{member.role}</p>
                        <p className="text-slate-600 text-sm transform group-hover:translate-x-2 transition-transform duration-300">{member.bio}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Team;