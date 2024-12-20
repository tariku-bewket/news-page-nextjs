import { DUMMY_NEWS } from '@/data/dummy-news';
import NewsList from '@/components/news-list';

export default function NewsPage() {
  return (
    <>
      <h1>All News</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
