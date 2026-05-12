import { Button } from '@/components';
import Link from 'next/link';

type LatestBlogsProps = {
  title: string;
  href: string;
  date: string;
};

function LatestBlogs({ title, href, date }: LatestBlogsProps) {
  return (
    <Button variant="outline" className="w-full justify-between" asChild>
      <Link href={href} className="flex w-full items-center justify-between">
        <h3 className="text-sm font-medium">{title}</h3>

        <span className="text-sm">{date}</span>
      </Link>
    </Button>
  );
}

export default LatestBlogs;
