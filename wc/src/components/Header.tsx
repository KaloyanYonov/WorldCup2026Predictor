import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full
        bg-white/90 backdrop-blur-md
        border-b border-gray-200
        z-50
      "
    >
      <nav
        className="
          max-w-5xl mx-auto
          flex items-center justify-center
          gap-8
          py-2
        "
      >
        <Link
          to="/"
          className="
            text-gray-700 
            hover:text-blue-500 
            transition-colors
            text-sm font-medium
          "
        >
          Main Page
        </Link>

        <Link
          to="/EuropeanPlayoffs"
          className="
            text-gray-700 
            hover:text-blue-500 
            transition-colors
            text-sm font-medium
          "
        >
          European Playoffs
        </Link>

        <Link
          to="/IntercontinentalPlayoffs"
          className="
            text-gray-700 
            hover:text-blue-500 
            transition-colors
            text-sm font-medium
          "
        >
          Intercontinental Playoffs
        </Link>
      </nav>
    </header>
  );
}
