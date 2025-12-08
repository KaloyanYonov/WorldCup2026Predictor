import { Link } from "react-router-dom";

type RedirectButtonProps = {
  to: string;
  text:string;
};

export default function RedirectButton({ to, text }: RedirectButtonProps) {
  return (
    <Link
      to={to}
      className="bg-[#1B1B1B] border border-yellow-200 hover:bg-yellow-500 px-4 py-2 rounded inline-block text-WHITE flex text-center m-6 active:scale-95 transition"
    >
      {text}
    </Link>
  );
}
