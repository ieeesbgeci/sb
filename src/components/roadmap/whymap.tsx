import { HiOutlineSparkles } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { BsAt } from "react-icons/bs";
import { MdModeOfTravel } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { SiSemanticscholar } from "react-icons/si";
export default function Whymap() {
    return (
        <>
            <div className="flex justify-center flex-col items-center gap-[60px] mx-auto w-max">
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:ml-36">
                    <div className="buttons text-3xl mx-9 inline-block font-medium block w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full"><HiOutlineSparkles className="inline-block" />
                    </div>
                    <div className="w-80 inline-block text-center"><h2>Amazing Exposure</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">IEEE members gain a huge exposure by being an active volunteer in the IEEE Community.</p></div>
                </div>
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:mr-36">
                    <div className="w-80 inline-block text-center order-1 md:order-[0]"><h2>Collabratec</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">Meet and connect with people from all over the world who are inclined to your field of interest.</p></div>
                    <div className="buttons text-3xl inline-block font-medium block mx-9 w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full"><BsPeople className="inline-block" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:ml-36">
                    <div className="buttons text-3xl mx-9 inline-block font-medium block w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full"><BsAt className="inline-block" />
                    </div>
                    <div className="w-80 inline-block text-center"><h2>IEEE mail</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">A professional mail ID with an "ieee.org" extension that gives you 30GB additional storage!</p></div>
                </div>
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:mr-36">
                    <div className="w-80 inline-block text-center order-1 md:order-[0]"><h2>Travel Grants</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">IEEE offers various travel grants to assist you in attending conferences and presenting papers</p></div>
                    <div className="buttons text-3xl inline-block font-medium block mx-9 w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full"><MdModeOfTravel className="inline-block" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:ml-36">
                    <div className="buttons text-3xl mx-9 inline-block font-medium block w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full"><BiCodeAlt className="inline-block" />
                    </div>
                    <div className="w-80 inline-block text-center"><h2>IEEE Xtreme</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">Free entry to the largest international programming competition conducted yearly.</p></div>
                </div>
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:mr-36">
                    <div className="w-80 inline-block text-center order-1 md:order-[0]"><h2>Scholarship</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">Apart from the travel grants, IEEE provides various scholarships to its members.</p></div>
                    <div className="buttons text-3xl inline-block font-medium block mx-9 w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full"><SiSemanticscholar className="inline-block" />
                    </div>
                </div>
            </div>
        </>
    )
}