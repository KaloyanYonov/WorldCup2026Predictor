import IntercontinentalBracket from "../components/ICBracket";
import Header from "../components/Header";
import SetButton from "../components/SetButton";
import ClearButton from "../components/ClearButton";
import { useState } from "react";
import type { teamProps } from "../components/Team";
import CancelButton from "../components/CancelButton";
import ConfirmButton from "../components/ConfirmButton";

export default function IntercontinentalPlayoffs() {

  const [path1Winner, setPath1Winner] = useState<teamProps | null>(null);
  const [path2Winner, setPath2Winner] = useState<teamProps | null>(null);

  const [areTeamsSelected, setAreTeamsSelected] = useState(false);
  const [winnersList, setWinnersList] = useState<teamProps[]>([]);

  function handleSet() {
    if (!path1Winner || !path2Winner) {
      alert("Please pick both winners before saving!");
      return;
    }

    setWinnersList([path1Winner, path2Winner]);
    setAreTeamsSelected(true);
  }

  function confirmSave() {
    localStorage.setItem("path1Winner", JSON.stringify(path1Winner));
    localStorage.setItem("path2Winner", JSON.stringify(path2Winner));
    setAreTeamsSelected(false);
  }

  function cancelSave() {
    setAreTeamsSelected(false);
  }

  function handleClear() {
    setPath1Winner(null);
    setPath2Winner(null);

    localStorage.removeItem("path1Winner");
    localStorage.removeItem("path2Winner");
  }


  return (
    <>
      <Header />
      <div className="pt-25 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards] items-center p-6">

        <h1 className="font-bold text-3xl p-6">Intercontinental Playoffs</h1>

        <div className="mt-10 space-y-12">

          <IntercontinentalBracket
            name="1"
            playInMatch={{
              team1: { name: "New Caledonia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_FLNKS.svg/2560px-Flag_of_FLNKS.svg.png", confederation: "OFC" },
              team2: { name: "Jamaica", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1200px-Flag_of_Jamaica.svg.png", confederation: "CONCACAF" }
            }}
            seededTeam={{
              name: "DR Congo",
              flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg",
              confederation: "CAF"
            }}
            finalWinner={path1Winner}
            onFinalWinner={setPath1Winner}
          />

          <IntercontinentalBracket
            name="2"
            playInMatch={{
              team1: { name: "Bolivia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/2560px-Flag_of_Bolivia_%28state%29.svg.png", confederation: "CONMEBOL" },
              team2: { name: "Suriname", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1200px-Flag_of_Suriname.svg.png", confederation: "CONCACAF" }
            }}
            seededTeam={{
              name: "Iraq",
              flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1200px-Flag_of_Iraq.svg.png",
              confederation: "AFC"
            }}
            finalWinner={path2Winner}
            onFinalWinner={setPath2Winner}
          />

        </div>
        <div className="flex gap-6 justify-center mt-10">
          <ClearButton onClear={handleClear} />

          <SetButton onSet={handleSet} />
        </div>
      </div>
      {areTeamsSelected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[350px] shadow-xl">

            <h2 className="text-xl font-bold mb-4 text-center">
              Confirm your picks
            </h2>

            <div className="space-y-3 mb-5">
              {winnersList.map((team, index) => (
                <div key={index} className="flex items-center gap-3 border p-2 rounded">
                  <img src={team.flag} className="w-8 h-auto rounded-sm" />
                  <p className="font-semibold">{team.name}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <CancelButton onCancel={cancelSave} />
              <ConfirmButton onConfirm={confirmSave} />
            </div>

          </div>
        </div>
      )}

    </>
  );
}
