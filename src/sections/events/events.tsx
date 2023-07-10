import Headings from "@/components/text/heading";
import Eventcard from "@/components/card/eventcard";
export default function Events() {
    return (
        <>
            <div id="Events" className="pt-32">
                <Headings
                    textFirst="UPCOMING"
                    textsecond="EVENTS"
                    xFirst={163.34}
                    xThird={14.59}
                    contWidth="w-[288px]"
                />
                <p className="w-[min(80vw,647px)] mt-6 text-center text-ms font-extralight text-[#666] mx-auto">
                    Come join us in these exciting events!
                </p>
                <Eventcard
                    id="herleap"
                    heading="HERLEAP"
                    time="8:30 pm - 9:30 pm"
                    text={
                        '𝐈𝐄𝐄𝐄 𝐖𝐈𝐄 𝐀𝐆 𝐆𝐄𝐂𝐈 collaboration with 𝐈𝐄𝐄𝐄 𝐂𝐒 𝐊𝐞𝐫𝐚𝐥𝐚 𝐜𝐡𝐚𝐩𝐭𝐞𝐫 brings you "𝐇𝐞𝐫𝐋𝐞𝐚𝐩" an exciting talk session about "Education and career success with scholarships and startup funds".'
                    }
                    month="JUL"
                    day="12"
                    poster="herleap.jpg"
                    url="https://forms.gle/ow5z8Cyk4JQ5qxY97"
                />
            </div>
        </>
    );
}
