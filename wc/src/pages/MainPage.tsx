import RedirectButton from "../components/RedirectButton";
import Header from "../components/Header";

export default function MainPage() {
  return (
    <>
      <Header />

      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

        <img
          src="" // can't find a suitable image yet
          className="absolute inset-0 w-full h-full opacity-70"
        />

        <div className="relative grid opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
          <h1 className="font-bold mb-6">Welcome to the official World Cup 2026 predictor!</h1>
          <RedirectButton to="/GroupStage" text="Get started" />
        </div>

      </div>
    </>
  );
}
