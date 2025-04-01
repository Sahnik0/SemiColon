
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Timeline', href: '#timeline' },
    { title: 'Tracks', href: '#tracks' },
    { title: 'Judges', href: '#judges' },
    { title: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-hackathon-blue to-hackathon-pink bg-clip-text text-transparent">
                SemiColon
              </span>
              <div className="absolute -top-1 -right-3 w-5 h-5 rounded-full bg-hackathon-yellow flex items-center justify-center text-xs font-bold text-hackathon-blue">
                23
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-hackathon-pink transition-colors relative group font-medium"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hackathon-pink transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <AnimatedButton variant="primary">
              Register Now
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-hackathon-lightblue text-hackathon-blue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 overflow-hidden',
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-slate-700 hover:text-hackathon-pink transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <AnimatedButton variant="primary" className="w-full justify-center">
            Register Now
          </AnimatedButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
