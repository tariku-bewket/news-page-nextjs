import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/data/dummy-news';

export default function ImagePage({ params }) {
  const newsSlug = params.newsSlug;
  const news = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!news) {
    notFound();
  }
  return (
    <div id='fullscreen-image'>
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
