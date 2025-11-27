import { Link } from "react-router-dom";

type RedirectButtonProps = {
  to: string;
  text:string;
};

export default function RedirectButton({ to, text }: RedirectButtonProps) {
  return (
    <Link
      to={to}
      className="bg-[#ead7c3] hover:bg-yellow-500 px-4 py-2 rounded inline-block text-black flex text-center m-6 active:scale-95 transition-transform"
    >
      {text}
    </Link>
  );
}
