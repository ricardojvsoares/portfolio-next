import { useTranslations } from 'next-intl';

export default function SkillsPage() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex w-full items-center justify-center">
      <h1>{t('title')}</h1>
    </div>
  );
}
