import { useState } from "react";
import RedirectButton from "./RedirectButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#111111] border-b border-yellow-200 py-3 px-4 fixed top-0 left-0 z-50 flex items-center justify-between">

        <h1 className="text-yellow-100 font-semibold text-lg">
          World Cup 2026 Predictor
        </h1>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-col gap-1 p-2 rounded hover:bg-[#222] active:scale-95 transition"
        >
          <span className="block w-6 h-[3px] bg-gray-300 rounded"></span>
          <span className="block w-6 h-[3px] bg-gray-300 rounded"></span>
          <span className="block w-6 h-[3px] bg-gray-300 rounded"></span>
        </button>
      </header>

      {open && (
        <div
          className="
            fixed top-[60px] right-4
            bg-[#1b1b1b] border border-yellow-200 
            rounded-lg p-3 
            flex flex-col gap-2
            z-50
            shadow-lg
            animate-[fadeIn_0.25s_ease-out_forwards]
          "
        >
          <RedirectButton to="/" text="Main Page" />
          <RedirectButton to="/GroupStage" text="Group Stage" />
          <RedirectButton to="/EuropeanPlayoffs" text="UEFA Playoffs" />
          <RedirectButton to="/intercontinentalPlayoffs" text="Intercontinental Playoffs" />
        </div>
      )}
    </>
  );
}
