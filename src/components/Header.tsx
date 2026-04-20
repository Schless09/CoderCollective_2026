"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog") ?? false;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useSolidBar = isScrolled || isBlog;

  const shell = useSolidBar
    ? "border-b border-white/10 bg-gray-900/80 py-3 backdrop-blur-md"
    : "bg-transparent py-6";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${shell}`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 max-w-[min(100%,calc(100vw-5rem))] items-center gap-2 sm:gap-3"
        >
          <Image
            src="/images/CC-new.svg"
            alt="Coder Collective Logo"
            width={50}
            height={50}
            className="h-10 w-10 shrink-0 rounded-lg sm:h-[50px] sm:w-[50px]"
          />
          <span className="truncate text-lg font-bold text-white transition-colors hover:text-white/80 sm:text-xl md:text-2xl">
            Coder Collective
          </span>
        </Link>
        {isBlog ? (
          <Link
            href="/"
            className="inline-flex min-h-[44px] shrink-0 items-center rounded-lg px-2 text-sm font-semibold text-white/80 transition-colors hover:text-purple-400 active:text-purple-300"
          >
            Home
          </Link>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
