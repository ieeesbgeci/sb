import Headings from "@/components/text/heading"
import Explore from "@/components/button/explore"
import {MdOutlineRocketLaunch} from 'react-icons/md'
export default function Execom() {
    return (
        <>
            <div id="Execom" className="pt-32">
                <Headings firstPart="EXE" secondPart="COM" xFirst={55.45} contWidth="w-[123px]" />
                <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">Execom Team for the year <span className="font-sans text-base">2023-2024</span></p>
                <div className="mx-auto w-max"><Explore name="See More" icon={MdOutlineRocketLaunch} url="/execom" /></div>
            </div>
        </>
    )
}