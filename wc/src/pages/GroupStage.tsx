import RedirectButton from "../components/RedirectButton"


export default function GroupStage(){
    return(
        <div className="grid">
            <RedirectButton to="/" text="Main page"/>
            
            <h1>The group stage draw has not concluded yet.</h1>
            <h2>Offical draw will be held on December 5th 2025</h2>

        </div>
    )
}