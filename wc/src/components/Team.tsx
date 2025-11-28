export type teamProps = {

    name: string;
    flag : string;
    confederation? : string;
}

export default function Team({name,flag,confederation} : teamProps){
    return(
        <div className="bg-transparent w-60 border border-double  rounded bg-white animate-pulse">
            <img src={flag} alt="" className="w-7"/>
            <h3 className="font-bold">{name} {confederation ?  `(${confederation})` : " "}</h3>
        </div>
    )
}