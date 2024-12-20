export default function NewsDetailPage({ params }) {
  const newsId = params.newsId;

  return (
    <div>
      <h1>News Detail</h1>
      <p>This is the news detail page.</p>
      <p>News ID: {newsId}</p>
    </div>
  );
}
