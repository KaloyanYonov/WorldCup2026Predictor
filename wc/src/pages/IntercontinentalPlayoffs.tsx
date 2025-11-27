import IntercontinentalBracket from "../components/ICBracket";
import Header from "../components/Header";

export default function IntercontinentalPlayoffs() {
  return (
    <>
    <Header/>
    <div className="opacity-0 animate-[fadeIn_0.4s_ease-out_forwards] items-center justify-center p-6">
      
      <h1 className="m-6">Intercontinental Playoffs</h1>
      <p className="">
        The inter-confederation play-offs of the 2026 FIFA World Cup qualification
        determine two qualification spots.
      </p>

      <div className="mt-10 space-y-12">
        
        <h3 className="font-bold text-lg mb-4">Path 1</h3>
        <IntercontinentalBracket 
          playInMatch={{
            team1: { name: "New Caledonia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_FLNKS.svg/1200px-Flag_of_FLNKS.svg.png", confederation: "OFC" },
            team2: { name: "Jamaica", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1200px-Flag_of_Jamaica.svg.png", confederation: "CONCACAF" }
          }}
          seededTeam={{
            name: "DR Congo",
            flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg",
            confederation: "CAF"
          }}
        />

        <h3 className="font-bold text-lg mb-4">Path 2</h3>
        <IntercontinentalBracket 
          playInMatch={{
            team1: { name: "Bolivia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/2560px-Flag_of_Bolivia_%28state%29.svg.png", confederation: "CONMEBOL" },
            team2: { name: "Suriname", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1200px-Flag_of_Suriname.svg.png", confederation: "CONCACAF" }
          }}
          seededTeam={{
            name: "Iraq",
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1200px-Flag_of_Iraq.svg.png",
            confederation: "AFC"
          }}
        />

      </div>
    </div>
    </>
  );
}
