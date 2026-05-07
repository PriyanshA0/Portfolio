'use client';

import { Github, Linkedin, Mail, PencilLine, Twitter } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { socialLinks } from '@/data/portfolio';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

function iconFor(label: string) {
  switch (label) {
    case 'GitHub':
      return Github;
    case 'Twitter/X':
      return Twitter;
    case 'LinkedIn':
      return Linkedin;
    case 'Mail':
      return Mail;
    case 'Resume':
      return PencilLine;
    default:
      return Github;
  }
}

type LiveProfile = {
  name?: string;
  handle?: string;
  bio?: string;
  details?: string;
  avatarUrl?: string;
  stats?: string;
};

function getFallbackAvatar(link: (typeof socialLinks)[number]): string | undefined {
  const platform = link.profile?.platform;
  const username = link.profile?.username;

  if (link.profile?.avatarUrl) {
    return link.profile.avatarUrl;
  }

  if (platform === 'github' && username) {
    return `https://github.com/${username}.png?size=128`;
  }

  if (platform === 'twitter' && username) {
    return `https://unavatar.io/twitter/${username}`;
  }

  if (platform === 'linkedin' && username) {
    return `https://unavatar.io/linkedin/${username}`;
  }

  if (platform === 'medium') {
    return 'https://unavatar.io/medium.com';
  }

  return undefined;
}

export function ConnectSection() {
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [liveProfiles, setLiveProfiles] = useState<Record<string, LiveProfile>>({});

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const githubProfiles = useMemo(
    () => socialLinks.filter((link) => link.profile?.platform === 'github' && link.profile?.username),
    []
  );

  useEffect(() => {
    let isMounted = true;

    const loadGitHubProfiles = async () => {
      const updates: Record<string, LiveProfile> = {};

      for (const link of githubProfiles) {
        const username = link.profile?.username;
        if (!username) {
          continue;
        }

        try {
          const response = await fetch(`https://api.github.com/users/${username}`);
          if (!response.ok) {
            continue;
          }

          const data = await response.json();
          updates[link.label] = {
            name: data.name || link.profile?.name || username,
            handle: data.login ? `@${data.login}` : link.profile?.handle,
            bio: data.bio || link.profile?.bio,
            details: link.profile?.details,
            avatarUrl: data.avatar_url || getFallbackAvatar(link),
            stats:
              typeof data.followers === 'number' && typeof data.public_repos === 'number'
                ? `${data.public_repos} repos · ${data.followers} followers`
                : undefined
          };
        } catch {
          updates[link.label] = {
            name: link.profile?.name,
            handle: link.profile?.handle,
            bio: link.profile?.bio,
            details: link.profile?.details,
            avatarUrl: getFallbackAvatar(link)
          };
        }
      }

      if (isMounted && Object.keys(updates).length > 0) {
        setLiveProfiles((prev) => ({ ...prev, ...updates }));
      }
    };

    loadGitHubProfiles();
    return () => {
      isMounted = false;
    };
  }, [githubProfiles]);

  return (
    <section id="connect" className="section-shell">
      <div className="section-inner">
        <SectionHeading eyebrow="Connect" title="A simple set of useful links." description="Everything is kept close together so it works well on smaller screens and feels easy to scan." />

        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((link) => {
              const Icon = iconFor(link.label);
              const fallbackAvatar = getFallbackAvatar(link);
              const profile = {
                name: liveProfiles[link.label]?.name || link.profile?.name || 'Priyanshu Mishra',
                handle: liveProfiles[link.label]?.handle || link.profile?.handle,
                bio: liveProfiles[link.label]?.bio || link.profile?.bio,
                details: liveProfiles[link.label]?.details || link.profile?.details,
                avatarUrl: liveProfiles[link.label]?.avatarUrl || fallbackAvatar,
                stats: liveProfiles[link.label]?.stats
              };

              return (
                <Popover key={link.label} open={openPopover === link.label} onOpenChange={(open: boolean) => setOpenPopover(open ? link.label : null)}>
                  <PopoverTrigger asChild>
                    <button 
                      className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white/80 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:bg-slate-900/50 h-14 justify-start rounded-[1.25rem] px-4 text-slate-700 shadow-sm dark:text-slate-200 cursor-pointer"
                      type="button"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </button>
                  </PopoverTrigger>
                  {link.profile && (
                    <PopoverContent
                      side={isMobile ? 'bottom' : 'right'}
                      align={isMobile ? 'center' : 'start'}
                      collisionPadding={12}
                      sideOffset={10}
                      className="w-[min(22rem,calc(100vw-1.5rem))] rounded-2xl border border-slate-800 bg-slate-900/95 p-4 text-slate-100"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
                            {profile.avatarUrl ? (
                              <img src={profile.avatarUrl} alt={`${profile.name} profile`} className="h-full w-full object-cover" loading="lazy" />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-cyan-300">
                                {profile.name.slice(0, 1)}
                              </div>
                            )}
                          </div>
                          <div className="min-w-0">
                            <h3 className="truncate text-sm font-semibold text-slate-100">{profile.name}</h3>
                            {profile.handle && <p className="truncate text-xs text-slate-400">{profile.handle}</p>}
                          </div>
                        </div>

                        {profile.bio && <p className="text-sm leading-6 text-slate-300">{profile.bio}</p>}

                        {profile.details && <p className="text-xs text-slate-400">{profile.details}</p>}

                        {profile.stats && <p className="text-xs font-medium text-cyan-300">{profile.stats}</p>}

                        <div className="pt-2">
                          <a
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                            className="inline-flex items-center text-xs font-medium text-cyan-300 hover:text-cyan-200 cursor-pointer"
                            onClick={() => setOpenPopover(null)}
                          >
                            Visit →
                          </a>
                        </div>
                      </div>
                    </PopoverContent>
                  )}
                </Popover>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
