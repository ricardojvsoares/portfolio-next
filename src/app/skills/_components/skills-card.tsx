'use client';

import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  years: number;
  maxYears?: number;
  icon?: LucideIcon;
}

interface SkillCardProps {
  title: string;
  icon?: LucideIcon;
  skills: Skill[];
  maxYears?: number;
  className?: string;
}

function SkillRow({ skill, maxYears }: { skill: Skill; maxYears: number }) {
  const max = skill.maxYears ?? maxYears;
  const pct = Math.min(100, Math.round((skill.years / max) * 100));
  const Icon = skill.icon;

  return (
    <div className="group border-border bg-card hover:border-primary/40 hover:bg-accent/50 flex flex-col gap-1.5 rounded-lg border px-4 py-3 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <Icon
              size={16}
              className="text-primary shrink-0 opacity-80 transition-opacity group-hover:opacity-100"
            />
          )}
          <span className="text-foreground text-sm font-medium">{skill.name}</span>
        </div>
        <span className="label-caps text-primary/80 group-hover:text-primary transition-colors">
          {skill.years} YRS
        </span>
      </div>

      <div className="bg-muted h-0.75 w-full overflow-hidden rounded-full">
        <div
          className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function SkillCard({ title, icon: Icon, skills, maxYears, className }: SkillCardProps) {
  const resolvedMax = maxYears ?? Math.max(...skills.map((s) => s.years));

  return (
    <Card
      className={cn(
        'glass hover-lift flex flex-col gap-4 p-6',
        'hover:border-primary/30 transition-all duration-300',
        className
      )}
    >
      <CardHeader className="p-0">
        <CardTitle className="text-foreground flex items-center gap-2.5 text-xl font-semibold">
          {Icon && <Icon size={20} className="text-primary" />}
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 p-0">
        {skills.map((skill) => (
          <SkillRow key={skill.name} skill={skill} maxYears={resolvedMax} />
        ))}
      </CardContent>
    </Card>
  );
}

export { SkillCard, type SkillCardProps, type Skill };
