import { useTranslations } from 'next-intl';
import { AVAILABLE } from '@/lib/constants';
function Available() {
  const t = useTranslations('Components');
  if (AVAILABLE)
    return (
      <div className="border-border bg-muted flex w-fit items-center gap-2 rounded-full border px-3 py-1">
        <span className="status-dot status-dot--available" />
        <span className="label-caps text-muted-foreground">{t('availableForOpportunities')}</span>
      </div>
    );
  return (
    <div className="border-border bg-muted flex w-fit items-center gap-2 rounded-full border px-3 py-1">
      <span className="status-dot status-dot--busy" />
      <span className="label-caps text-muted-foreground">{t('notAvailableForOpportunities')}</span>
    </div>
  );
}

export { Available };
