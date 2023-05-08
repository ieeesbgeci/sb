import Headings from "@/components/text/heading"
import Eventcard from "@/components/card/eventcard"
export default function Events(){
    return(
        <>  
            <div id="Events" className="pt-32">
            <Headings textFirst="UPCOMING" textsecond="EVENTS" xFirst={163.34} xThird={14.59} contWidth="w-[288px]"/>
            <p className="w-[min(80vw,647px)] mt-6 text-center text-ms font-extralight text-[#666] mx-auto">Come join us in these exciting events!</p>
            <Eventcard id="AGM" heading="Annual General Meeting 2023" time="3:30 PM" text="Join us at IEEE SB GECI's Annual General Meeting 2023, where we'll embark on a journey of camaraderie and excellence. Let's forge connections with fellow volunteers and launch an unforgettable year, infusing our student branch activities with renewed vigor. Together, let's ignite our passion for innovation!" month="MAY" day="08" poster="AGm.jpeg"/>
            </div>
        </>
    )
}