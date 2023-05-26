import Headings from "@/components/text/heading"
import Eventcard from "@/components/card/eventcard"
export default function Events(){
    return(
        <>  
            <div id="Events" className="pt-32">
            <Headings textFirst="UPCOMING" textsecond="EVENTS" xFirst={163.34} xThird={14.59} contWidth="w-[288px]"/>
            <p className="w-[min(80vw,647px)] mt-6 text-center text-ms font-extralight text-[#666] mx-auto">Come join us in these exciting events!</p>
            <Eventcard id="IR" heading="INTRODUCTION TO ROBOTICS AND ITS APPLICATIONS" time="7:30-8:30 pm" text="IEEE SBC RAS GECI is organizing an online talk session on 'INTRODUCTION TO ROBOTICS AND ITS APPLICATIONS'. Don't  miss this opportunity. Ignite your passion in robotics and join our class" month="MAY" day="29" poster="IR.jpeg" url="https://forms.gle/8YtnYvzyEyq4822t7" vanue="Google meet"/>
            </div>
        </>
    )
}