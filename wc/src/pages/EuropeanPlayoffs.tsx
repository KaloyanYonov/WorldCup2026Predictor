import Bracket from "../components/Bracket";
import Header from "../components/Header";

export default function EuropeanPlayoffs() {
  return (
    <>
    <Header/>
    <div className="grid opacity-0 animate-[fadeIn_0.4s_ease-out_forwards] pt-30 pb-25">

      <h1>European Playoffs</h1>
      <Bracket
        name="A"
        match1={{
          team1: { name: "Italy", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png"},
          team2: { name: "Northern Ireland", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg/1200px-Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg.png"},
        }}
        match2={{
          team1: { name: "Wales", flag: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg"},
          team2: { name: "Bosnia and Herzegovina", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png"},
        }}
      />

      <Bracket
        name="B"
        match1={{
          team1: { name: "Ukraine", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/330px-Flag_of_Ukraine.svg.png"},
          team2: { name: "Sweden", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png"},
        }}
        match2={{
          team1: { name: "Poland", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png"},
          team2: { name: "Albania", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png"},
        }}
      />
      <Bracket
        name="C"
        match1={{
          team1: { name: "Turkey", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"},
          team2: { name: "Romania", flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg"},
        }}
        match2={{
          team1: { name: "Slovakia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1200px-Flag_of_Slovakia.svg.png"},
          team2: { name: "Kosovo", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/2560px-Flag_of_Kosovo.svg.png"},
        }}
      />
      <Bracket
        name="D"
        match1={{
          team1: { name: "Denmark", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png"},
          team2: { name: "North Macedonia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1200px-Flag_of_North_Macedonia.svg.png"},
        }}
        match2={{
          team1: { name: "Czech Republic", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1200px-Flag_of_the_Czech_Republic.svg.png"},
          team2: { name: "Republic of Ireland", flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"},
        }}
      />
    </div>
    </>
  );
}
