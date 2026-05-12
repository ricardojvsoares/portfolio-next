import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type FeaturedProjectProps = {
  title: string;
  imageUrl: string;
  badges: string[];
};

function FeaturedProject({ title, imageUrl, badges }: FeaturedProjectProps) {
  const t = useTranslations('FeaturedProject');
  return (
    <Card className="hover-lift relative mx-auto w-full max-w-sm overflow-hidden pt-0">
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="aspect-video w-full object-cover brightness-50 transition-transform duration-500 hover:scale-105 dark:brightness-40"
          width={600}
          height={340}
        />
      </div>
      <CardHeader className="pt-5">
        <CardTitle className="text-lg">{t(`${title}.title`)}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {t(`${title}.description`)}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-wrap gap-2 pb-5">
        {badges.map((badge) => (
          <Badge key={badge} variant="outline" className="flex items-center gap-1.5 text-xs">
            <span className="status-dot h-1.5 w-1.5 shrink-0" />
            {badge}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}

export { FeaturedProject };
