import RedirectButton from "../components/RedirectButton"

export default function MainPage(){
    return(
        <>
            <h1>Welcome to the official World Cup 2026 predictor !</h1>
            <RedirectButton to="/GroupStage" text="Group Stage"/>
            <RedirectButton to="/IntercontinentalPlayoffs" text="Intercontinental Playoffs"/>
            <RedirectButton to="/EuropeanPlayoffs" text="European Playoffs"/>

        </>
    )
}