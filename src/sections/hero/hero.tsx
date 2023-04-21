import Explore from "@/components/button/explore"
import { MdOutlineRocketLaunch } from 'react-icons/md'
import Society from "@/components/society/society"
export default function Hero() {
    return (
        <>
            <div className="pt-20 md:pt-32">
                <div className="flex justify-center items-center">
                    <div className="w-max sm:mt-[7rem] min-[460px] sm:mt-44">
                        <div className="m-3 h-[80vh] sm:h-auto flex flex-col items-center justify-center">
                            <div className="w-max mx-auto">
                                <svg viewBox="0 0 201 71" className="text-8xl font-bold h-[38px] sm:h-[60px] inline-block mx-1">
                                    <text y="70" className="fill-none stroke-[#27B7F4] stroke-[3] stroke-linejoin-miter paint-order-stroke">IEEE</text>
                                </svg>
                                <svg viewBox="0 0 367 76" className="text-8xl font-bold h-[38px] sm:h-[60px] inline-block mx-1">
                                    <text y="72" className="stroke-[#000000] stroke-[4] stroke-linejoin-miter paint-order-stroke fill-[#000000]">GECI SB</text>
                                </svg>
                            </div>
                            <p className="w-[min(80vw,647px)] my-10 text-center text-ms font-extralight text-[#666] mx-auto">IEEE Student Branch Government Engineering College Idukki, active since the first of December 2019, has opened a world of opportunities, to each and everyone who aspires to learn and evolve. </p>
                            <div className="mx-auto w-max"><Explore name="Explore" icon={MdOutlineRocketLaunch} url="" /></div>
                        </div>
                        <Society />
                    </div>
                </div>
            </div>
        </>
    )
}