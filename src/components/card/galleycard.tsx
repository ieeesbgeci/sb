import Image from "next/image"
export default function Gallerycard(props:{name:string,className?:string}) {
    return (
        <>
            <div className={`${props.className} w-full h-auto inline-block bg-white p-1 rounded-[6px] relative after:absolute after:z-[-1] after:inset-[0.12em] after:rounded-[6px] after:blur-[3px] after:bg-[#27b7f4] after:opacity-100 cursor-pointer`}><div className="overflow-hidden rounded-[4px]"><Image src={`/assets/gallery/${props.name}`} alt="join ieee" width="0" height="0" sizes="100vw" className="w-full h-auto rounded-[4px] hover:scale-105 transition-[transform] duration-300"/></div></div>
        </>
    )
}