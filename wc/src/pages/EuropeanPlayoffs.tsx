import Bracket from "../components/Bracket";
import Header from "../components/Header";
import { useState } from "react";
import type { teamProps } from "../components/Team";
import ClearButton from "../components/ClearButton";
import SetButton from "../components/SetButton";
import CancelButton from "../components/CancelButton";
import ConfirmButton from "../components/ConfirmButton";

export default function EuropeanPlayoffs() {

  const [winnerA, setWinnerA] = useState<teamProps | null>(null);
  const [winnerB, setWinnerB] = useState<teamProps | null>(null);
  const [winnerC, setWinnerC] = useState<teamProps | null>(null);
  const [winnerD, setWinnerD] = useState<teamProps | null>(null);

  const [areTeamsSelected, setAreTeamsSelected] = useState(false);
  const [winnersList, setWinnersList] = useState<teamProps[]>([]);



  function handleSet() {
    if (!winnerA || !winnerB || !winnerC || !winnerD) {
      alert("You must pick all 4 winners before saving!");
      return;
    }

    const finalWinners = [winnerA, winnerB, winnerC, winnerD];

    setWinnersList(finalWinners);
    setAreTeamsSelected(true); 
  }


  function handleClear() {
    setWinnerA(null);
    setWinnerB(null);
    setWinnerC(null);
    setWinnerD(null);

    localStorage.removeItem("winnerA");
    localStorage.removeItem("winnerB");
    localStorage.removeItem("winnerC");
    localStorage.removeItem("winnerD");
  }

  function confirmSave() {
    localStorage.setItem("winnerA", JSON.stringify(winnerA));
    localStorage.setItem("winnerB", JSON.stringify(winnerB));
    localStorage.setItem("winnerC", JSON.stringify(winnerC));
    localStorage.setItem("winnerD", JSON.stringify(winnerD));

    setAreTeamsSelected(false);
  }

  function cancelSave() {
    setAreTeamsSelected(false);
  }




  return (
    <>
      <Header />
      <div className="grid opacity-0 animate-[fadeIn_0.4s_ease-out_forwards] pt-30 pb-25">

        <h1 className="font-bold text-3xl pb-6 pt-6">European Playoffs</h1>
        <Bracket
          name="A"
          match1={{
            team1: { name: "Italy", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png" },
            team2: { name: "Northern Ireland", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg/1200px-Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg.png" },
          }}
          match2={{
            team1: { name: "Wales", flag: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg" },
            team2: { name: "Bosnia and Herzegovina", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png" },
          }}
          finalWinner={winnerA}
          onFinalWinner={setWinnerA}
        />

        <Bracket
          name="B"
          match1={{
            team1: { name: "Ukraine", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/330px-Flag_of_Ukraine.svg.png" },
            team2: { name: "Sweden", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png" },
          }}
          match2={{
            team1: { name: "Poland", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png" },
            team2: { name: "Albania", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png" },
          }}
          finalWinner={winnerB}
          onFinalWinner={setWinnerB}
        />
        <Bracket
          name="C"
          match1={{
            team1: { name: "Turkey", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
            team2: { name: "Romania", flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg" },
          }}
          match2={{
            team1: { name: "Slovakia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1200px-Flag_of_Slovakia.svg.png" },
            team2: { name: "Kosovo", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/2560px-Flag_of_Kosovo.svg.png" },
          }}
          finalWinner={winnerC}
          onFinalWinner={setWinnerC}
        />
        <Bracket
          name="D"
          match1={{
            team1: { name: "Denmark", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png" },
            team2: { name: "North Macedonia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1200px-Flag_of_North_Macedonia.svg.png" },
          }}
          match2={{
            team1: { name: "Czech Republic", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1200px-Flag_of_the_Czech_Republic.svg.png" },
            team2: { name: "Republic of Ireland", flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" },
          }}
          finalWinner={winnerD}
          onFinalWinner={setWinnerD}
        />
        <div className="flex justify-center mt-10 gap-15">
          <ClearButton onClear={handleClear} />
          <SetButton onSet={handleSet} />
        </div>

        {areTeamsSelected && (
          <div className="fixed inset-0 bg-[#dce0d9] bg-opacity-40 animate-[fadeIn_0.4s_ease-out_forwards] flex items-center justify-center z-40">
            <div className="bg-white rounded-lg p-6 w-[350px] shadow-xl animate-[fadeIn_0.2s_ease-out_forwards]">

              <h2 className="text-xl font-bold mb-4 text-center">
                Confirm your final picks.
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
                
                <CancelButton onCancel={cancelSave}/>
                <ConfirmButton onConfirm={confirmSave}/>
                
              </div>

            </div>
          </div>
        )}

      </div>
    </>
  );
}
