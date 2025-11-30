import { Link } from "react-router-dom";

type RedirectButtonProps = {
  to: string;
  text:string;
};

export default function RedirectButton({ to, text }: RedirectButtonProps) {
  return (
    <Link
      to={to}
      className="bg-[#dfe7ee] hover:bg-[#CFD8E0] px-4 py-2 rounded inline-block text-black flex text-center m-6 active:scale-95 transition"
    >
      {text}
    </Link>
  );
}
