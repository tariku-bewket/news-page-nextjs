'use client';

import { notFound, useRouter } from 'next/navigation';

import { DUMMY_NEWS } from '@/data/dummy-news';

export default function InterceptedImagePage({ params }) {
  const router = useRouter();

  const newsSlug = params.newsSlug;
  const news = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!news) {
    notFound();
  }
  return (
    <>
      <div className='modal-backdrop' onClick={router.back} />
      <dialog className='modal' open>
        <div id='fullscreen-image'>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}