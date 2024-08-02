import ecoImage from '../assets/eco.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Appbar() {
    return (
        <div className=" fixed flex w-full  justify-between max-sm:justify-normal max-sm:gap-x-12 z-50 items-center max-sm:px-2 max-sm:py-4 py-4 px-24 bg-black/20 backdrop-blur-md ">
            <div className='flex items-center cursor-pointer gap-1'>
                <img src={ecoImage} alt="LOGO" className=""></img>
                <p className='text-4xl font-bold tracking-wide max-sm:text-sm'>Galactic.io</p>
            </div>
            <div className='flex items-center gap-x-16 text-lg font-medium'>
                <p className='cursor-pointer hover:underline max-sm:hidden '>Mercury</p>
                <p className='cursor-pointer hover:underline max-sm:hidden'>Venus</p>
                <p className='cursor-pointer hover:underline max-sm:hidden'>Earth</p>
                <p className='cursor-pointer hover:underline max-sm:hidden'>Mars</p>
                <div className=' flex items-center justify-center cursor-pointer size-6 border-none  rounded-full hover:bg-slate-200/30'><MoreHorizIcon /></div>
            </div>
            <div className=' flex flex-col justify-center max-sm:text-sm'>
                <p>©2023 Solarsystemdesign</p>
            </div>
        </div>
    )
}