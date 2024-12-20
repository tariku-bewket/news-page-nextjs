import Image from 'next/image';
import Link from 'next/link';

import logoImg from '@/assets/logo.jpg';

export default function MainHeader() {
  return (
    <header id='main-header'>
      <div id='logo'>
        <Link href='/'>
          <Image src={logoImg} alt='news logo' width={100} height={100} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/news'>News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
