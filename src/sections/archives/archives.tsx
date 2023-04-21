import Headings from "@/components/text/heading"
import Explore from "@/components/button/explore"
import {MdKeyboardDoubleArrowUp} from 'react-icons/md'
export default function Archives(){
    return(
        <>
            <div id="Archives" className="pt-32">
            <Headings firstPart="ARCH" secondPart="IVES" xFirst={82.92} contWidth="w-[148px]" />
            <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">Come join us in these exciting events!</p>
            <div className="mx-auto w-max"><Explore name="Explore" icon={MdKeyboardDoubleArrowUp} url="/archives" /></div>
            </div>
        </>
    )
}