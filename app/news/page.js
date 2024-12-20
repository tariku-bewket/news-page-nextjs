import Link from 'next/link';

export default function NewsPage() {
  return (
    <>
      <h1>All News</h1>
      <ul className='news-list'>
        <li>
          <Link href='/news/first-post'>First Post</Link>
        </li>
        <li>
          <Link href='/news/second-post'>Second Post</Link>
        </li>
        <li>
          <Link href='/news/third-post'>Third Post</Link>
        </li>
      </ul>
    </>
  );
}
