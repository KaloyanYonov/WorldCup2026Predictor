import RedirectButton from "../components/RedirectButton"
import Header from "../components/Header"

export default function MainPage(){
    return(
        <>
        <Header/>
        <div className="grid opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
            <h1>Welcome to the official World Cup 2026 predictor !</h1>
            <RedirectButton to="/GroupStage" text="Get started"/>
        </div>
        </>
    )
}