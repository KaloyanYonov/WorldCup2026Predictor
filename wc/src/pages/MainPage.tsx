import RedirectButton from "../components/RedirectButton";
import Header from "../components/Header";

export default function MainPage() {
  return (
    <>
      <Header />

      <div className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="relative grid text-center px-4 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
          <h1 className="font-bold mb-6 text-xl sm:text-3xl">
            Welcome to the official World Cup 2026 predictor!
          </h1>

          <RedirectButton to="/GroupStage" text="Get started" />
        </div>
      </div>
    </>
  );
}
