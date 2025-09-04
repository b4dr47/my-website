import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import Image from "next/image";
import { FaBlog, FaDiagramProject } from "react-icons/fa6";

const navItems = {
  "/blog": { name: "Blog", icon: <FaBlog /> },
  "/projects": { name: "Projects", icon: <FaDiagramProject /> },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold">
            <Image
              src="/logo.webp"
              alt="logo"
              className="rounded-lg lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto flex items-center justify-center"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name, icon }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center gap-2"
            >
              {icon}
              <span>{name}</span>
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
