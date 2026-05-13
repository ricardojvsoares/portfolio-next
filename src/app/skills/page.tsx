'use client';

import {
  Cloud,
  Container,
  GitBranch,
  Wrench,
  Database,
  Server,
  Zap,
  Wind,
  MonitorSmartphone,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { SkillCard } from './_components';
import { Available, FadeSection, StatBadge } from '@/components';

export default function SkillsPage() {
  const categories = [
    {
      title: 'Frontend',
      icon: Layers,
      skills: [
        { name: 'React', years: 4, icon: MonitorSmartphone },
        { name: 'Tailwind CSS', years: 3, icon: Wind },
        { name: 'Next.js', years: 2, icon: Zap },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', years: 5, icon: Server },
        { name: 'PostgreSQL', years: 3, icon: Database },
        { name: 'GraphQL', years: 2, icon: GitBranch },
      ],
    },
    {
      title: 'Tools & Ops',
      icon: Wrench,
      skills: [
        { name: 'Git', years: 6, icon: GitBranch },
        { name: 'Docker', years: 3, icon: Container },
        { name: 'AWS', years: 2, icon: Cloud },
      ],
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20">
      <FadeSection className="mb-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="bg-primary/10 text-primary label-caps rounded-full px-3 py-1">
            Skills &amp; Expertise
          </span>
          <span className="bg-border h-px flex-1" />
        </div>

        <h1 className="text-foreground mb-4 max-w-xl">Technical Expertise</h1>

        <p className="text-muted-foreground mb-8 max-w-lg text-lg leading-relaxed">
          A focused breakdown of my core competencies and toolchain — emphasising modern, scalable
          web technologies and robust backend architectures.
        </p>

        <a
          href="#cards"
          className="text-primary hover:text-primary/80 group inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          Explore my stack
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </FadeSection>

      <FadeSection className="mb-16 flex flex-wrap gap-4" delay={150}>
        <StatBadge value={9} suffix="+" label="Technologies" />
        <StatBadge value={6} suffix=" yrs" label="Max experience" />
        <StatBadge value={3} suffix="" label="Disciplines" />
      </FadeSection>

      <div id="cards" className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((cat, i) => (
          <FadeSection key={cat.title} delay={i * 100}>
            <SkillCard title={cat.title} icon={cat.icon} skills={cat.skills} className="h-full" />
          </FadeSection>
        ))}
      </div>

      <FadeSection delay={300}>
        <Available />
      </FadeSection>
    </main>
  );
}
