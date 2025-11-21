import Bracket from "../components/Bracket";

export default function IntercontinentalPlayoffs() {
    return (
        <div className="grid items-center justify-center p-6">
            <h1 className="m-6">Intercontinental playoffs</h1>

            <p>
                The inter-confederation play-offs of the 2026 FIFA World Cup qualification
                tournament will determine two qualification spots for the World Cup.
            </p>

            <div className="mt-10">
                <h3 className="font-bold text-lg mb-4">Path 1</h3>

                <Bracket
                    semifinal1={{
                        team1: { name: "New Caledonia", flag: "...", confederation: "OFC" },
                        team2: { name: "Jamaica", flag: "...", confederation: "CONCACAF" }
                    }}
                    semifinal2={{
                        team1: { name: "Oman", flag: "...", confederation: "AFC" },
                        team2: { name: "Panama", flag: "...", confederation: "CONCACAF" }
                    }}
                />

                <h3 className="font-bold text-lg">Path 2</h3>
            </div>
        </div>
    );
}
