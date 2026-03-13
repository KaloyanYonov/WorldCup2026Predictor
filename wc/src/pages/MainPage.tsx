import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function MainPage() {
  return (
    <>
      <Header />

      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#1B1B1B]">

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,200,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-black text-white leading-none tracking-tight"
            style={{ fontSize: "clamp(10rem, 38vw, 26rem)", opacity: 0.025 }}
          >
            2026
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">

          <div className="border border-yellow-200/30 rounded-full px-5 py-1.5 text-yellow-200/60 text-[11px] uppercase tracking-widest">
            USA · Canada · Mexico
          </div>

          <div className="flex flex-col gap-0">
            <h1 className="font-black text-white text-5xl sm:text-7xl uppercase tracking-tight leading-tight">
              World Cup
            </h1>
            <h2 className="font-black text-yellow-400 text-5xl sm:text-7xl uppercase tracking-tight leading-tight">
              2026
            </h2>
          </div>

          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="flex-1 h-px bg-yellow-200/20"></div>
            <span className="text-yellow-200/40 text-[10px] uppercase tracking-[0.2em]">Predictor</span>
            <div className="flex-1 h-px bg-yellow-200/20"></div>
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-sm">
            Predict every stage — from the playoffs all the way to the final.
          </p>

          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-600">
            <span>Playoffs</span>
            <span className="text-yellow-400/40">—</span>
            <span>Group Stage</span>
            <span className="text-yellow-400/40">—</span>
            <span>Knockout</span>
          </div>

          <Link
            to="/GroupStage"
            className="mt-2 px-10 py-3 bg-yellow-400 text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-yellow-300 active:scale-95 transition-all"
          >
            Get Started
          </Link>

        </div>
      </div>
    </>
  );
}
