import Link from 'next/link';

type LatestBlogsProps = {
  title: string;
  href: string;
  date: string;
};

function LatestBlogs({ title, href, date }: LatestBlogsProps) {
  return (
    <Link
      href={href}
      className="group hover:border-border hover:bg-accent border-border/50 flex w-full items-center justify-between rounded-lg border px-4 py-3.5 transition-colors"
    >
      <h3 className="text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
        {title}
      </h3>
      <span className="text-muted-foreground ml-4 shrink-0 text-xs">{date}</span>
    </Link>
  );
}

export { LatestBlogs };
