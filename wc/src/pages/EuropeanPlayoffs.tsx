import Bracket from "../components/Bracket"

export default function EuropeanPlayoffs(){
    return(
        <div>
            European Playoffs.

            <h1>Path A</h1>
            <Bracket semifinal1={
                {
                    team1 : {name : "Italy" , flag: "" , confederation:""},
                    team2 : {name : "Northern Ireland", flag: "", confederation:""}
                }
                
            }
            semifinal2={
                {
                    team1 : {name:"Wales", flag: "" , confederation:""},
                    team2 : {name:"Bosnia and Herzegovina", flag: "" , confederation:""},

                }
            }
            />
            <h1>Path B</h1>
            <Bracket semifinal1={
                {
                    team1 : {name : "Ukraine" , flag: "" , confederation:""},
                    team2 : {name : "Sweden", flag: "", confederation:""}
                }
                
            }
            semifinal2={
                {
                    team1 : {name:"Poland", flag: "" , confederation:""},
                    team2 : {name:"Albania", flag: "" , confederation:""},

                }
            }
            />
            <h1>Path C</h1>
            <Bracket semifinal1={
                {
                    team1 : {name : "Turkey" , flag: "" , confederation:""},
                    team2 : {name : "Romania", flag: "", confederation:""}
                }
                
            }
            semifinal2={
                {
                    team1 : {name:"Slovakia", flag: "" , confederation:""},
                    team2 : {name:"Kosovo", flag: "" , confederation:""},

                }
            }
            />
            <h1>Path D</h1>
            <Bracket semifinal1={
                {
                    team1 : {name : "Denmark" , flag: "" , confederation:""},
                    team2 : {name : "North Macedonia", flag: "", confederation:""}
                }
                
            }
            semifinal2={
                {
                    team1 : {name:"Czech Republic", flag: "" , confederation:""},
                    team2 : {name:"Republic of Ireland", flag: "" , confederation:""},

                }
            }
            />
        </div>
    )
}