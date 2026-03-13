import { Link } from "react-router-dom";

type RedirectButtonProps = {
  to: string;
  text: string;
  className?: string;
};

export default function RedirectButton({ to, text, className = "" }: RedirectButtonProps) {
  return (
    <Link
      to={to}
      className={`w-full px-4 py-3 bg-yellow-400 text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-yellow-300 active:scale-95 transition-all text-center leading-tight ${className}`}
    >
      {text}
    </Link>
  );
}
