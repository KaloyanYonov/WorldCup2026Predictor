export type teamProps = {

    name: string;
    flag : string;
    confederation? : string;
}

export default function Team({name,flag,confederation} : teamProps){
    return(
        <div className="bg-transparent border rounded animate-pulse">
            <img src={flag} alt="" className="w-6"/>
            <h3 className="font-bold">{name} {confederation ?  `(${confederation})` : " "}</h3>
        </div>
    )
}