import sun from "../assets/sun.svg";
import bg from "../assets/bg.jpg";


export default function Sun() {
    return(
        <div style={{
            backgroundImage: `url(${bg})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        className="h-screen w-screen overflow-hidden"
        >
            <div className="h-[100vh] w-[120vw]">
                <img src={sun} className="object-cover"></img>
            </div>
        </div>
    )
}