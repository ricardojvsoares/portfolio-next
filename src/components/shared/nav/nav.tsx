import { NAME } from '@/lib/const/names';

export function Nav() {
  return (
    <nav className="flex h-16 w-full items-center justify-between px-4">
      <div className="text-primary font-mono text-xl font-bold">{NAME}</div>
      <ul className="flex items-center gap-2">
        <li>
          <a href="#home" className="hover:text-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-700">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-700">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-700">
            Contact
          </a>
        </li>
      </ul>
      {/* TODO: Theme toggle */}

      {/* TODO: Language Dropdown */}

      {/* TODO: CV download */}
    </nav>
  );
}
