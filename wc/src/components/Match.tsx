import Team from "./Team"
import type { teamProps } from "./Team"


export type matchProps = {

    team1 : teamProps;
    team2 : teamProps;

} 



export default function Match({team1,team2} : matchProps){
    return(
        <button className="flex flex-col gap-4 p-4 border rounded-lg">
              <Team {...team1} />
              <Team {...team2} />
        </button>
    )
}