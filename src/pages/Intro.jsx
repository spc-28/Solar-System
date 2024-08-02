import Appbar from "../components/Appbar";
import Hero from "../components/hero";
import bg from "../assets/bg.jpg";

export default function Intro() {
    return (
        <div style={{
            backgroundImage: `url(${bg})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} 
        className="flex flex-col h-screen w-screen ">
            <Appbar />
            <Hero />
        </div>
    )
}