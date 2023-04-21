import Image from "next/image"
export default function Society() {
    return (
        <>
            <div className="flex opacity-75 sm:mt-48 gap-[80px_60px] flex-col items-center flex-wrap justify-between mx-auto sm:w-[100%] sm:flex-row">
                <div className="h-12"><Image src={"/assets/cs_black.png"} alt="psoter" width="0" height="0" sizes="100vw" className="w-auto h-full"/></div>
                <div className="h-12"><Image src={"/assets/pes_black.png"} alt="psoter" width="0" height="0" sizes="100vw" className="w-auto h-full"/></div>
                <div className="h-12"><Image src={"/assets/ras_black.png"} alt="psoter" width="0" height="0" sizes="100vw" className="w-auto h-full"/></div>
                <div className="h-12"><Image src={"/assets/wie_black.png"} alt="psoter" width="0" height="0" sizes="100vw" className="w-auto h-full"/></div>
            </div>
        </>
    )
}