import { useTranslations } from 'next-intl';
import { FeaturedProject, LatestBlogs } from './_components';
import { Available, Button, Separator } from '@/components';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="flex min-h-[50vh] flex-col justify-center gap-6">
        <Available />

        <h1 className="text-gradient max-w-2xl leading-[1.1]">{t('header')}</h1>

        <p className="text-muted-foreground max-w-md text-base leading-relaxed">
          {t('headerDescription')}
        </p>

        <div className="mt-2 flex gap-3">
          <Button className="btn-scale">{t('myWork')}</Button>
          <Button variant="outline" className="btn-scale">
            {t('contactMe')}
          </Button>
        </div>
      </section>

      <Separator />

      <section className="mt-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-foreground/50">
            <span className="text-foreground">{t('featuredProjectsHighlight')}</span>{' '}
          </h2>
          <Link
            href="/projects"
            className="link-underline text-primary flex items-center gap-1 text-sm"
          >
            {t('viewAll')}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
          <FeaturedProject
            title="boilerplate"
            imageUrl="https://picsum.photos/seed/nexus/600/340"
            badges={['React', 'Go', 'Kafka']}
          />
          <FeaturedProject
            title="auraUI"
            imageUrl="https://picsum.photos/seed/aura/600/340"
            badges={['TypeScript', 'Tailwind CSS']}
          />
          <FeaturedProject
            title="cloudScale"
            imageUrl="https://picsum.photos/seed/cloud/600/340"
            badges={['Terraform', 'Kubernetes']}
          />
        </div>
      </section>

      <Separator className="mt-12" />

      {/* ── Latest from the Blog ── */}
      <section className="mt-12 mb-8">
        <h2 className="text-foreground mb-8">{t('latestBlog')}</h2>
        <div className="flex flex-col gap-2">
          <LatestBlogs
            title="Architecting Resilient Microservices with Go and gRPC"
            href="#"
            date="Oct 24, 2024"
          />
          <LatestBlogs
            title="Demystifying React Server Components for Performance"
            href="#"
            date="Sep 12, 2024"
          />
          <LatestBlogs
            title="The Minimalist Engineer: Why Less Code is Better Code"
            href="#"
            date="Aug 05, 2024"
          />
        </div>
      </section>
    </div>
  );
}
