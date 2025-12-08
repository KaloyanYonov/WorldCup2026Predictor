import Header from "../components/Header";
import Group from "../components/Group";
import { useState, useEffect } from "react";
import type { teamProps } from "../components/Team";
import RedirectButton from "../components/RedirectButton";

export default function GroupStage() {

  const [ready, setReady] = useState(false);

  const [winnerA, setWinnerA] = useState<teamProps | null>(null);
  const [winnerB, setWinnerB] = useState<teamProps | null>(null);
  const [winnerC, setWinnerC] = useState<teamProps | null>(null);
  const [winnerD, setWinnerD] = useState<teamProps | null>(null);
  const [path1, setPath1] = useState<teamProps | null>(null);
  const [path2, setPath2] = useState<teamProps | null>(null);

  useEffect(() => {
    function load(key: string): teamProps | null {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
      
    }

    const A = load("winnerA");
    const B = load("winnerB");
    const C = load("winnerC");
    const D = load("winnerD");
    const P1 = load("path1Winner");
    const P2 = load("path2Winner");

    

    setWinnerA(A);
    setWinnerB(B);
    setWinnerC(C);
    setWinnerD(D);
    setPath1(P1);
    setPath2(P2);

    if (A && B && C && D && P1 && P2) {
      setReady(true);
    }
  }, []);

  


  return (


    <div className="pl-5 pr-5flex w-full items-center justify-center">
      <Header />

      {!ready ? 
      <div className="flex flex-col items-center justify-center animate-[fadeIn_0.4s_ease-out_forwards]">
          <p className="text-white flex items-center justify-center m-10 text-3xl">Please complete the European and Intercontinenal playoffs first.
          </p> 
          <div className="flex">
            <RedirectButton to="/EuropeanPlayoffs" text="UEFA Playoffs"/>
            <RedirectButton to="/intercontinentalPlayoffs" text="Intercontinental Playoffs"/>
          </div>
          

      </div>:

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pt-40 pb-20 gap-7 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">

          <Group
            name="A"
            teams={[
              { name: "Mexico", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/330px-Flag_of_Mexico.svg.png" },
              { name: "South Korea", flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
              { name: "South Africa", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1200px-Flag_of_South_Africa.svg.png" },
              winnerD ?? { name: "Team A4", flag: "" },
            ]}
          />
          <Group name="B" teams={[
            { name: "Canada", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" },
            winnerA ?? { name: "", flag: "" },
            { name: "Qatar", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png" },
            { name: "Switzerland", flag: "https://st2.depositphotos.com/1007997/5889/v/950/depositphotos_58894729-stock-illustration-switzerland-flag-vector.jpg" },

          ]} />
          <Group name="C" teams={[
            { name: "Brazil", flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" },
            { name: "Morocco", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1280px-Flag_of_Morocco.svg.png" },
            { name: "Haiti", flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg" },
            { name: "Scotland", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/330px-Flag_of_Scotland.svg.png" },

          ]} />
          <Group name="D" teams={[
            { name: "United States", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" },
            { name: "Paraguay", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1200px-Flag_of_Paraguay.svg.png" },
            { name: "Australia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/330px-Flag_of_Australia_%28converted%29.svg.png" },
            winnerC ?? { name: "undefined", flag: "" },

          ]} />
          <Group name="E" teams={[
            { name: "Germany", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" },
            { name: "Curacao", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/1200px-Flag_of_Cura%C3%A7ao.svg.png" },
            { name: "Ivory Coast", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1200px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png" },
            { name: "Ecuador", flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg" },

          ]} />
          <Group name="F" teams={[
            { name: "Netherlands", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" },
            { name: "Japan", flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
            winnerB ?? { name: "undefined", flag: "" },
            { name: "Tunisia", flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" },

          ]} />
          <Group name="G" teams={[
            { name: "Belgium", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png" },
            { name: "Egypt", flag: "https://cdn.britannica.com/85/185-050-6A8E2E8A/Flag-Egypt.jpg" },
            { name: "Iran", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/630px-Flag_of_Iran.svg.png" },
            { name: "New Zealand", flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dbTwtZ4Y0zI8zhVT9H-APzBOouDu_kxG-Q&s" },

          ]} />
          <Group name="H" teams={[
            { name: "Spain", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png" },
            { name: "Cape Verde", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1200px-Flag_of_Cape_Verde.svg.png" },
            { name: "Saudi Arabia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png" },
            { name: "Uruguay", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png" },

          ]} />
          <Group name="I" teams={[
            { name: "France", flag: "https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg" },
            { name: "Senegal", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg" },
            path2 ?? { name: "undefined", flag: "" },
            { name: "Norway", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1200px-Flag_of_Norway.svg.png" },

          ]} />
          <Group name="J" teams={[
            { name: "Argentina", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/960px-Flag_of_Argentina.svg.png" },
            { name: "Algeria", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Algeria_%28color_shades_variant%29.svg/2560px-Flag_of_Algeria_%28color_shades_variant%29.svg.png" },
            { name: "Austria", flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
            { name: "Jordan", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1200px-Flag_of_Jordan.svg.png" },

          ]} />
          <Group name="K" teams={[
            { name: "Portugal", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Portugal_%28official%29.svg/1200px-Flag_of_Portugal_%28official%29.svg.png" },
            path1 ?? { name: "undefined", flag: "" },
            { name: "Uzbekistan", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png" },
            { name: "Colombia", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png" },

          ]} />
          <Group name="L" teams={[
            { name: "England", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png" },
            { name: "Croatia", flag: "https://cdn.britannica.com/06/6206-050-4A54E70D/Flag-Croatia.jpg" },
            { name: "Ghana", flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg" },
            { name: "Panama", flag: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg" },

          ]} />


        </div>}

    </div>

  );
}
