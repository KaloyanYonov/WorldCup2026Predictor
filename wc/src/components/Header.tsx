import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Main Page" },
  { to: "/GroupStage", label: "Group Stage" },
  { to: "/EuropeanPlayoffs", label: "UEFA Playoffs" },
  { to: "/intercontinentalPlayoffs", label: "Intercontinental Playoffs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#111111]/90 backdrop-blur-sm border-b border-yellow-200/20 py-3 px-5 fixed top-0 left-0 z-50 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="text-yellow-400 font-black text-xs uppercase tracking-[0.2em] group-hover:text-yellow-300 transition">
            World Cup
          </span>
          <span className="text-white font-black text-base uppercase tracking-widest group-hover:text-yellow-100 transition">
            2026 Predictor
          </span>
        </Link>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative w-8 h-8 flex items-center justify-center rounded hover:bg-white/5 active:scale-95 transition"
          aria-label="Toggle menu"
        >
          <span className={`absolute block w-5 h-[2px] bg-yellow-200/80 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`} />
          <span className={`absolute block w-5 h-[2px] bg-yellow-200/80 rounded transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute block w-5 h-[2px] bg-yellow-200/80 rounded transition-all duration-300 ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`} />
        </button>
      </header>

      {open && (
        <div className="fixed top-[61px] right-4 z-50 bg-[#111111]/95 backdrop-blur-sm border border-yellow-200/15 rounded-xl shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out_forwards]">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white/50 hover:text-yellow-400 hover:bg-white/5 border-l-2 border-transparent hover:border-yellow-400 transition-all"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
