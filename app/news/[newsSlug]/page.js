import { DUMMY_NEWS } from '@/data/dummy-news';

export default function NewsDetailPage({ params }) {
  const newsSlug = params.newsSlug;

  const news = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${news.image}`} alt={news.title} />
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
