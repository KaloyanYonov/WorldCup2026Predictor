import Header from "../components/Header";
import Group from "../components/Group";

export default function GroupStage() {
  return (
    <div className="flex items-center justify-center">
      <Header />

      <div className="grid grid-cols-4 pt-40 pb-20 gap-7 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">

        <Group 
          name="A"
          teams={[
            { name: "Mexico", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/330px-Flag_of_Mexico.svg.png" },
            { name: "TBD", flag: "" },
            { name: "TBD", flag: "" },
            { name: "TBD", flag: "" },
          ]}
        />
        <Group name="B" teams={[
            {name: "Canada", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png"},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="C" teams={[
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="D" teams={[
            {name: "United States", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="E" teams={[
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="F" teams={[
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="G" teams={[
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="H" teams={[
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="I" teams={[
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="J" teams={[
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="K" teams={[
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>
        <Group name="L" teams={[
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},
            {name: "undefined", flag: ""},

        ]}/>


      </div>
    </div>
  );
}
