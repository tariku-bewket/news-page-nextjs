import { notFound } from 'next/navigation';

import ModalBackdrp from '@/components/modal-backdrp';
import { getNewsItem } from '@/lib/news';

export default async function InterceptedImagePage({ params }) {
  const newsSlug = params.newsSlug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrp />
      <dialog className='modal' open>
        <div id='fullscreen-image'>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
