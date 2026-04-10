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
    <header className={`fixed z-50 w-full transition-all duration-300 ${shell}`}>
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/CC-new.svg"
            alt="Coder Collective Logo"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-white transition-colors hover:text-white/80">
            Coder Collective
          </span>
        </Link>
        {isBlog ? (
          <Link
            href="/"
            className="text-sm font-semibold text-white/80 transition-colors hover:text-purple-400"
          >
            Home
          </Link>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
