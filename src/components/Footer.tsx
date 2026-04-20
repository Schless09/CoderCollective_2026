import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-white sm:px-6">
      <div className="container mx-auto flex items-center justify-between gap-4 sm:gap-6">
        <div className="flex min-w-0 flex-1 flex-col items-center text-center sm:items-start sm:text-left">
          <Link href="/" className="flex max-w-full items-center">
            <Image
              src="/images/CC-new.svg"
              alt="Coder Collective Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="ml-3 truncate text-lg font-semibold sm:text-xl">
              Coder Collective
            </span>
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} - All Rights Reserved
          </p>
          <p className="mt-2 text-xs text-gray-400">
            a{" "}
            <a
              href="https://www.recruitcha.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition hover:text-white"
            >
              Recruitcha
            </a>{" "}
            company
          </p>
        </div>
        <a
          href="https://www.linkedin.com/company/the-coder-collective"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white touch-manipulation active:opacity-80"
          aria-label="Coder Collective on LinkedIn"
        >
          <Linkedin className="h-6 w-6" aria-hidden />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
