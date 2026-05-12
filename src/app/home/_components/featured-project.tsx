import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

type FeaturedProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
  badges: string[];
};

function FeaturedProject({ title, description, imageUrl, badges }: FeaturedProjectProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Image
        src={imageUrl}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40"
        width={400}
        height={225}
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {badges.map((badge) => (
          <Badge key={badge} variant="outline">
            {badge}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}

export { FeaturedProject };
