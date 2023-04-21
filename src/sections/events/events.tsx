import Headings from "@/components/text/heading"
import Eventcard from "@/components/card/eventcard"
export default function Events(){
    return(
        <>  
            <div id="Events" className="pt-32">
            <Headings textFirst="UPCOMING" textsecond="EVENTS" xFirst={163.34} xThird={14.59} contWidth="w-[288px]"/>
            <p className="w-[min(80vw,647px)] mt-6 text-center text-ms font-extralight text-[#666] mx-auto">Come join us in these exciting events!</p>
            <Eventcard id="shark" heading="SHARK TANK" time="9:30 AM - 12:00 PM" text="IEEE RAS SBC GECI proudly presents a workshop on 3D Printing.Certificates will be provided for those who attend the workshop.Registration is FREE! for all" month="DEC" day="03" url="" poster="shark.jpeg"/>
            <Eventcard id="hour" heading="HOUR OF CODE" time="4:30 PM - 6:30 PM" text="IEEE RAS SBC GECI proudly presents a workshop on 3D Printing.Certificates will be provided for those who attend the workshop.Registration is FREE! for all" month="MAY" day="04" url="" poster="hoc2.jpeg" />
            <Eventcard id="career" heading="ARREAR TO CAREER" time="4:30 PM - 6:30 PM" text="IEEE RAS SBC GECI proudly presents a workshop on 3D Printing.Certificates will be provided for those who attend the workshop.Registration is FREE! for all" month="OCT" day="31" url="" poster="carr.jpeg" />
            </div>
        </>
    )
}