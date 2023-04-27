import Image from "next/image"
export default function Execomcard(props:{className?:string,src:string,name:string,position:string,soceity:string}){
    return(
        <>
            <div className={`${props.className} h-[420px] w-[240px] bg-[rgba(248,252,251,0.7)] rounded-2xl relative flex py-10 flex-col items-center gap-2`}>
                <div className="rounded-full w-40 h-40 overflow-hidden border-[4px] border-white"><Image src={`/assets/execom/${props.src}`} alt="execom" width="120" height="120" className="w-full"/></div>
                <h2 className="font-medium">{props.name}</h2>
                <div className="text-center text-xs text-[#666] font-extralight">
                    <h4>{props.position}</h4>
                    <h4>{props.soceity}</h4>
                </div>
            </div>
        </>
    )
}