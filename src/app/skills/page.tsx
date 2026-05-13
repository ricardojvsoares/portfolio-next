'use client';

import { useTranslations } from 'next-intl';
import { SkillCard } from './_components';
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
} from 'lucide-react';

export default function SkillsPage() {
  const t = useTranslations('SkillsPage');
  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <SkillCard
          title="Frontend"
          icon={Layers}
          skills={[
            { name: 'React', years: 4, icon: MonitorSmartphone },
            { name: 'Tailwind CSS', years: 3, icon: Wind },
            { name: 'Next.js', years: 2, icon: Zap },
          ]}
        />

        <SkillCard
          title="Backend"
          icon={Server}
          skills={[
            { name: 'Node.js', years: 5, icon: Server },
            { name: 'PostgreSQL', years: 3, icon: Database },
            { name: 'GraphQL', years: 2, icon: GitBranch },
          ]}
        />

        <SkillCard
          title="Tools & Ops"
          icon={Wrench}
          skills={[
            { name: 'Git', years: 6, icon: GitBranch },
            { name: 'Docker', years: 3, icon: Container },
            { name: 'AWS', years: 2, icon: Cloud },
          ]}
        />
      </div>
    </div>
  );
}
