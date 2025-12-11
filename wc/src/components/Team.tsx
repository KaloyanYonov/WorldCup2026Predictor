export type teamProps = {

    name: string;
    flag : string;
    confederation? : string;
}

export default function Team({name,flag,confederation} : teamProps){
    return(
        <div className="bg-transparent flex gap-2 w-57 rounded">
            <img src={flag} alt="" className="w-8 h-5"/>
            <h3 className="font-bold">{name} {confederation ?  `(${confederation})` : " "}</h3>
        </div>
    )
}