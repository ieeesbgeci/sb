import Headings from "@/components/text/heading"
import Eventcard from "@/components/card/eventcard"
export default function Events(){
    return(
        <>  
            <div id="Events" className="pt-32">
            <Headings textFirst="UPCOMING" textsecond="EVENTS" xFirst={163.34} xThird={14.59} contWidth="w-[288px]"/>
            <p className="w-[min(80vw,647px)] mt-6 text-center text-ms font-extralight text-[#666] mx-auto">Come join us in these exciting events!</p>
            <Eventcard id="integralbee" heading="INTEGRATION BEE" time="4:30 pm" text={`IEEE SB GECI is organizing a competitive event "INTEGRATION BEE" based on ✨️integrals. Integration Bee is  a platform for students to showcase their creativity, problem-solving skills, and love for mathematics. Win cash prize of 1.5k🎁`} month="JUN" day="13" poster="bee.jpeg" url="https://forms.gle/YXktEkEaPbxrgd6i9" vanue="CS 401 Classroom"/>
            </div>
        </>
    )
}