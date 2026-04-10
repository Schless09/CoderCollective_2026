import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black px-4 py-8 text-white sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/CC-new.svg"
              alt="Coder Collective Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="ml-3 text-xl font-semibold">
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
          <a
            href="https://www.linkedin.com/company/the-coder-collective"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-lg p-2 text-gray-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Coder Collective on LinkedIn"
          >
            <Linkedin className="h-6 w-6" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
