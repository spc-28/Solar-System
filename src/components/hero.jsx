import p1 from "../assets/Group 2.svg";
import p2 from "../assets/Layer 2.svg";
import p3 from "../assets/Layer 3.svg";
import p4 from "../assets/Layer 4.svg";
import p5 from "../assets/layer 5.svg";
import p6 from "../assets/layer 6.svg";
export default function Hero() {
    return (
    <div className="flex w-full justify-between overflow-hidden ">
        <div className="flex flex-col h-full w-[30vw] mt-12 gap-10">
            <div className="w-[20.4vw] h-[25vh]">
                <img src={p1} className="object-cover"></img>
            </div>
            <div className="w-[20vw] h-[55vh]">
                <img src={p2} className="object-cover"></img>
            </div>
            <div className="w-[11.4vw] h-[17.1vh]">
                <img src={p3} className="object-cover"></img>
            </div>
        </div>
        <div className=" w-[40vw] flex flex-col gap-4 items-center justify-center relative top-[10vh]">
            <p className="text-6xl max-sm:text-3xl text-center tracking-widest font-bold leading-tight ">Let's get to know <br></br>our solar system <br/>galaxy</p>
            <p className="text-center max-sm:text-sm">Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the cosmos and the planets weaving stories of their timeless existence.</p>
            <button type="button" class="text-white bg-gradient-to-r from-purple-700 to-pink-700  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg max-sm:text-sm text-2xl px-5 py-4 text-center mt-4 mb-2">Learn More &darr; </button>
            <div className="h-[22.3vh] w-[16vw] relative top-[15vh] max-sm:left-[-3vw]">
                <img src={p6} className=" size-fit object-contain"></img>
            </div>
        </div>
        <div className="h-full flex flex-col w-[30vw] gap-4">
            <div className="w-[33.7vw] h-[44vh] relative left-[13vw] top-[10vh] ">
                <img src={p4} className=" size-fit object-contain"></img>
            </div>
            <div className="w-[34.7vw] h-[52.2vh] relative bottom-[-26vh] left-[3vw]">
                <img src={p5} className=" size-fit object-contain"></img>
            </div>
        </div>
    </div>
    )
}