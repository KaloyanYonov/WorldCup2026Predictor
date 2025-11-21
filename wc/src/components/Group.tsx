import Team from "./Team"


export default function Group( name : string){
    return(
        <div className="grid items-center justify-center">
            <div className="border">
                <h4>Group {name}</h4>
                <Team name="" flag="" confederation=""/>
                <Team name="undefined" flag="" confederation=""/>
                <Team name="undefined" flag="" confederation=""/>
                <Team name="undefined" flag="" confederation=""/>
            </div>
        </div>
    )
}