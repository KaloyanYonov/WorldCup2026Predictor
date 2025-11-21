import IntercontinentalBracket from "../components/ICBracket";

export default function IntercontinentalPlayoffs() {
  return (
    <div className="grid items-center justify-center p-6">
      <h1 className="m-6">Intercontinental Playoffs</h1>

      <p>
        The inter-confederation play-offs of the 2026 FIFA World Cup qualification
        determine two qualification spots.
      </p>

      <div className="mt-10 space-y-12">
        
        <h3 className="font-bold text-lg mb-4">Path 1</h3>
        <IntercontinentalBracket 
          playInMatch={{
            team1: { name: "New Caledonia", flag: "...", confederation: "OFC" },
            team2: { name: "Jamaica", flag: "...", confederation: "CONCACAF" }
          }}
          seededTeam={{
            name: "DR Congo",
            flag: "",
            confederation: "CAF"
          }}
        />

        <h3 className="font-bold text-lg mb-4">Path 2</h3>
        <IntercontinentalBracket 
          playInMatch={{
            team1: { name: "Bolivia", flag: "", confederation: "CONMEBOL" },
            team2: { name: "Suriname", flag: "", confederation: "CONCACAF" }
          }}
          seededTeam={{
            name: "Iraq",
            flag: "",
            confederation: "AFC"
          }}
        />

      </div>
    </div>
  );
}
