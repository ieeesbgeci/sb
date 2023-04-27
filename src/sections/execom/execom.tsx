import Headings from "@/components/text/heading"
import Explore from "@/components/button/explore"
import { MdOutlineRocketLaunch, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Execomcard from "@/components/card/execomcard"
export default function Execom() {
    return (
        <>
            <div id="Execom" className="pt-32">
                <Headings firstPart="EXE" secondPart="COM" xFirst={55.45} contWidth="w-[123px]" />
                <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">Execom Team for the year <span className="font-sans text-base">2023-2024</span></p>
                <div className="w-fit h-auto relative inline-flex items-center mb-32 mx-auto">
                    <MdKeyboardArrowLeft className="text-3xl font-light absolute left-[0px] md:left-[0px]" />
                    <div className="execom-slider flex  relative justify-center items-center gap-2 sm:w-[820px] mx-auto">
                        <Execomcard soceity="IEEE SB GECI" position="Technical Coordinator" name="Arvin J" className="hidden scale-[.85] bg-[rgba(246,252,251,1)] drop-shadow-xl" src="ArvinJ.jpg" />
                        <Execomcard soceity="IEEE SB GECI" position="Chair" name="Adithyan P" src="AdithyanP.jpg" className="after:rounded-2xl after:absolute after:z-[-3] after:inset-[-0.12em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur-[2px] after:opacity-90" />
                        <Execomcard soceity="IEEE SB GECI" position="Design Lead" name="Midhun Nirmal" src="Midhun.jpg" className="hidden scale-[.85] bg-[rgba(246,252,251,1)] drop-shadow-xl" />
                    </div>
                    <MdKeyboardArrowRight className="text-3xl font-light absolute right-[0px] md:right-[0px]" />
                </div>
                <div className="mx-auto w-max"><Explore name="See More" icon={MdOutlineRocketLaunch} url="/execom" /></div>
            </div>
        </>
    )
}