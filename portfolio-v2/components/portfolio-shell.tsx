"use client";

import { useEffect, useState } from 'react';

import { CommandPalette } from '@/components/command-palette';
import { MobileMenu } from '@/components/mobile-menu';
import { SiteHeader } from '@/components/site-header';
import { AboutSection } from '@/components/sections/about-section';
import { ConnectSection } from '@/components/sections/connect-section';
import { EducationSection } from '@/components/sections/education-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { FavMoviesSection } from '@/components/sections/fav-movies-section';
import { FooterSection } from '@/components/sections/footer-section';
import { GitHubActivitySection } from '@/components/sections/github-activity-section';
import { HeroSection } from '@/components/sections/hero-section';
import { MusicSection } from '@/components/sections/music-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import AnimateProvider from '@/components/shared/animate-provider';
import { scrollToId, scrollToTop } from '@/lib/scroll';
import { useTheme } from 'next-themes';

export function PortfolioShell() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen(true);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  const navigate = (href: string) => {
    if (href.startsWith('#')) {
      scrollToId(href.slice(1));
    } else {
      window.open(href, href.startsWith('http') ? '_blank' : '_self', 'noopener,noreferrer');
    }
    setMenuOpen(false);
    setCommandOpen(false);
  };

  return (
    <>
      <SiteHeader onOpenSearch={() => setCommandOpen(true)} onOpenMenu={() => setMenuOpen(true)} />

      <main className="relative">
        <section id="home" className="section-shell relative overflow-hidden">
          <div className="absolute inset-0 grid-dots opacity-25 [mask-image:linear-gradient(to_bottom,white,transparent_95%)]" />
          <div className="section-inner relative">
            <HeroSection />
          </div>
        </section>

        <AboutSection />
        <MusicSection />
        <FavMoviesSection />
        <ConnectSection />
        <GitHubActivitySection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <FooterSection />
      </main>

      <CommandPalette
        open={commandOpen}
        onOpenChange={setCommandOpen}
        onNavigate={navigate}
        onToggleTheme={toggleTheme}
        onScrollTop={scrollToTop}
      />

      <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} onNavigate={navigate} onToggleTheme={toggleTheme} />
      <AnimateProvider />
    </>
  );
}
