import NewsList from '@/components/news-list';

import { getAvailableNewsYears, getNewsForYear } from '@/lib/news';
import Link from 'next/link';

export default function FilteredNewsPage({ params }) {
  const newYear = params.filter[0];
  const news = getNewsForYear(newYear);
  const years = getAvailableNewsYears();

  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {years.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <NewsList news={news} />
    </>
  );
}
