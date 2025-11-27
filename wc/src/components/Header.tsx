import RedirectButton from "./RedirectButton";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full
        bg-[#fbf6ef] backdrop-blur-md
        border-b border-gray-200
        z-50
      "
    >
      <nav
        className="
          max-w-5xl mx-auto
          flex items-center justify-center
          gap-8
          py-3
        "
      >
        <RedirectButton to="/" text="Main Page"/>
        <RedirectButton to="/GroupStage" text="Group Stage"/>
        <RedirectButton to="/EuropeanPlayoffs" text="European Playoffs"/>
        <RedirectButton to="/intercontinentalPlayoffs" text="Intercontinental Playoffs"/>


        
      </nav>
    </header>
  );
}
