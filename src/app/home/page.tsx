import { useTranslations } from 'next-intl';
import { FeaturedProject } from './_components/featured-project';
import { Button, Separator } from '@/components';
import LatestBlogs from './_components/latest-blogs';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="mt-10 px-4">
      <div className="flex w-full">
        <h1>{t('header')}</h1>
        <p>{t('headerDescription')}</p>
        <div className="mt-4 flex gap-4">
          <Button>{t('myWork')}</Button>
          <Button variant="secondary">{t('contactMe')}</Button>
        </div>
      </div>
      <Separator />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <FeaturedProject
          title="Design systems meetup"
          description="A practical talk on component APIs, accessibility, and shipping faster."
          imageUrl="https://picsum.photos/300/200"
          badges={['Design', 'React', 'Figma']}
        />
        <FeaturedProject
          title="Design systems meetup"
          description="A practical talk on component APIs, accessibility, and shipping faster."
          imageUrl="https://picsum.photos/300/200"
          badges={['Design', 'React', 'Figma']}
        />
        <FeaturedProject
          title="Design systems meetup"
          description="A practical talk on component APIs, accessibility, and shipping faster."
          imageUrl="https://picsum.photos/300/200"
          badges={['Design', 'React', 'Figma']}
        />
      </div>
      <Separator />
      <div>
        <h1>{t('latestBlog')}</h1>
        <LatestBlogs title="How to build a design system" href="#" date="June 10, 2024" />
      </div>
    </div>
  );
}
