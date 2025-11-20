import { Link } from "react-router-dom";

type RedirectButtonProps = {
  to: string;
  text:string;
};

export default function RedirectButton({ to, text }: RedirectButtonProps) {
  return (
    <Link
      to={to}
      className="bg-yellow-400 px-4 py-2 rounded inline-block text-black"
    >
      {text}
    </Link>
  );
}
