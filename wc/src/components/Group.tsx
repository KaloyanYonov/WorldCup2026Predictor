import Team from "./Team"
import type { teamProps } from "./Team";

export type groupProps = {
    char : string;
    first : teamProps;
    second : teamProps;
}


export default function Group( {char,first,second} : groupProps){
    return(
        <div className="grid items-center justify-center">
            <div className="border">
                <h4>Group {char}</h4>
                <Team name="" flag="" confederation=""/>
                <Team name="undefined" flag="" confederation=""/>
                <Team name="undefined" flag="" confederation=""/>
                <Team name="undefined" flag="" confederation=""/>
            </div>
        </div>
    )
}