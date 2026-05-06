"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";

export function GitHubActivitySection() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="section-shell">
      <div className="section-inner">

        <SectionHeading
          eyebrow="GitHub Activity"
          title="Live contribution graph."
          description="Real-time GitHub contribution activity."
        />

        <Reveal>
          <Card className="rounded-[2rem] border-slate-200/80 p-6 dark:border-slate-800 sm:p-8">

            <div className="overflow-x-auto">

              <GitHubCalendar
                username="PriyanshA0"
                colorScheme="dark"
                fontSize={14}
                blockSize={14}
                blockMargin={5}
                showWeekdayLabels
                theme={{
                  dark: [
                    "#161b22",
                    "#0e4429",
                    "#006d32",
                    "#26a641",
                    "#39d353",
                  ],
                }}
              />

            </div>

          </Card>
        </Reveal>

      </div>
    </section>
  );
}