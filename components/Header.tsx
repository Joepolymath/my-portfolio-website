import Link from 'next/link';
import { Button } from './ui/button';

// components
import Nav from './Nav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <Link href={'/'}>
          <h1 className="text-4xl font-semibold">
            Joshua <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav  & Hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={'/contact'}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  );
};

export default Header;
