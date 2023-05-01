import Headings from "@/components/text/heading"
import Explore from "@/components/button/explore"
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import Execomcard from "@/components/card/execomcard"
export default function Page() {
    return (
        <>
            <div className="pt-32">
                <Headings firstPart="EXE" secondPart="COM" xFirst={55.45} contWidth="w-[123px]" />
                <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">Execom Team for the year <span className="font-sans text-base">2023-2024</span></p>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <Execomcard soceity="IEEE SB GECI" phone="+919895327107" position="Branch Counselor" name="Dr Sunil K S" src="sunilSir.jpg" />
                    <Execomcard soceity="IEEE SB GECI" phone="+916235180710" mail="adithyanprasad149@ieee.org" linkedin="https://www.linkedin.com/in/adithyanprasad" position="Chairperson" name="Adithyan P" src="AdithyanP.jpg" />
                    <Execomcard soceity="IEEE SB GECI" phone="+917909180309" mail="sonabalasubramanian@ieee.org" linkedin="https://www.linkedin.com/in/sona-m-b-b08b9a219" position="Secretary" name="Sona M B" src="SonaMB.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" phone="+916235876053" mail="jithushivabro8086@gmail.com" linkedin="https://www.linkedin.com/in/shivadath-a-b232a5231" position="Vice Chairperson" name="Shivadath A" src="ShivadhathA.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Joint Secretary" name="Adarsh K" src="AdarshK.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Technical Coordinator" name="Arvin Joestus"  src="ArvinJ.jpg" />
                    <Execomcard soceity="IEEE SB GECI" position="Asst. Technical Coordinator" name="Harikrishnan V K" src="HarikrishnanVK.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Treasurer" name="Hemanth A K" src="Hemanth.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="LINK Representative" name="Niranjana K" src="NiranjanaK_.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Membership Development Coordinator" name="Salvi Hanna John" src="SalviHannaJohn.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="ECC" name="Ibnu Suresh P" src="IBNUSURESH.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Report Lead" name="Nandana B" src="NandanaB.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Design Lead" name="Midhun Nirmal" src="Midhun.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Web Master" name="Salwan K" src="salwanKajas.jpg"  />
                </div>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <h1 className="w-full text-xl font-bold text-center mb-32 ml-3">COMPUTER SOCIETY</h1>
                    <Execomcard soceity="IEEE SB GECI" position="Branch Counselor" name="Dr Sunil K S" src="sunilSir.jpg" />
                    <Execomcard soceity="IEEE SB GECI" position="Chairperson" name="Adithyan P" src="AdithyanP.jpg" />
                    <Execomcard soceity="IEEE SB GECI" position="Secretary" name="Sona M B" src="SonaMB.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Vice Chairperson" name="Shivadath A" src="ShivadhathA.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Joint Secretary" name="Adarsh K" src="AdarshK.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Technical Coordinator" name="Arvin Joestus" src="ArvinJ.jpg" />
                    <Execomcard soceity="IEEE SB GECI" position="Asst. Technical Coordinator" name="Harikrishnan V K" src="HarikrishnanVK.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Treasurer" name="Hemanth A K" src="Hemanth.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="LINK Representative" name="Niranjana K" src="NiranjanaK_.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Membership Development Coordinator" name="Salvi Hanna John" src="SalviHannaJohn.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="ECC" name="Ibnu Suresh P" src="IBNUSURESH.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Report Lead" name="Nandana B" src="NandanaB.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Design Lead" name="Midhun Nirmal" src="Midhun.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Web Master" name="Salwan K" src="salwanKajas.jpg"  />
                </div>
            </div>
        </>
    )
}