import RedirectButton from "../components/RedirectButton"
import Header from "../components/Header"

export default function MainPage(){
    return(
        <div className="grid">
            <Header/>
            <h1>Welcome to the official World Cup 2026 predictor !</h1>
            <RedirectButton to="/GroupStage" text="Group Stage"/>
            <RedirectButton to="/IntercontinentalPlayoffs" text="Intercontinental Playoffs"/>
            <RedirectButton to="/EuropeanPlayoffs" text="European Playoffs"/>

        </div>
    )
}